class LegalCase
  @@cases = [
    { id: 1, title: 'Property Dispute', client_name: 'Amit Sharma', status: 'Open' },
    { id: 2, title: 'Contract Review', client_name: 'Neha Verma', status: 'Closed' }
  ]

  def self.all
    @@cases
  end

  def self.find(id)
    @@cases.find { |c| c[:id] == id }
  end

  def self.create(data)
    new_case = {
      id: @@cases.empty? ? 1 : @@cases.last[:id] + 1,
      title: data[:title],
      client_name: data[:client_name],
      status: data[:status]
    }
    @@cases << new_case
    new_case
  end

  def self.update(id, data)
    legal_case = find(id)
    return nil unless legal_case

    legal_case[:title] = data[:title] if data[:title]
    legal_case[:client_name] = data[:client_name] if data[:client_name]
    legal_case[:status] = data[:status] if data[:status]

    legal_case
  end

  def self.delete(id)
    legal_case = find(id)
    return false unless legal_case

    @@cases.delete(legal_case)
    true
  end
end