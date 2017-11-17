class CreateOrganizations < ActiveRecord::Migration[5.1]
  def change
    create_table :organizations do |t|
      t.string :name
      t.string :url
      t.string :email

      t.timestamps
    end
  end
end
