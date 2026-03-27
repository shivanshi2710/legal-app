require 'sinatra'
require 'json'
require_relative './models/case'
require 'sinatra/cross_origin'

set :bind, '0.0.0.0'
set :port, 4567
set :environment, :production

set :protection, false
set :host_authorization, { permitted_hosts: [] }

before do
  content_type :json
end

configure do
  enable :cross_origin
end

before do
  response.headers['Access-Control-Allow-Origin'] = '*'
end

get '/' do
  { message: 'Legal App is running successfully!!' }.to_json
end

get '/cases' do
  LegalCase.all.to_json
end

get '/cases/:id' do
  legal_case = LegalCase.find(params[:id].to_i)
  if legal_case
    legal_case.to_json
  else
    status 404
    { error: 'Case not found' }.to_json
  end
end

post '/cases' do
  request.body.rewind
  data = JSON.parse(request.body.read)

  new_case = LegalCase.create(
    title: data['title'],
    client_name: data['client_name'],
    status: data['status']
  )

  status 201
  new_case.to_json
end

put '/cases/:id' do
  request.body.rewind
  data = JSON.parse(request.body.read)

  updated_case = LegalCase.update(
    params[:id].to_i,
    title: data['title'],
    client_name: data['client_name'],
    status: data['status']
  )

  if updated_case
    updated_case.to_json
  else
    status 404
    { error: 'Case not found' }.to_json
  end
end

delete '/cases/:id' do
  deleted = LegalCase.delete(params[:id].to_i)

  if deleted
    { message: 'Case deleted successfully' }.to_json
  else
    status 404
    { error: 'Case not found' }.to_json
  end
end