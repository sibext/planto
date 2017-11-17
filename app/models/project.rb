class Project < ApplicationRecord
  has_many :reports
  validates_presence_of :name
end
