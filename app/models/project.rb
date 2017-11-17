class Project < ApplicationRecord
  has_many :reports
  belongs_to :organization
  validates_presence_of :name
end
