class Organization < ApplicationRecord
  has_many :projects
  validates_presence_of :name, :email
end
