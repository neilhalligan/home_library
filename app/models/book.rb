class Book < ApplicationRecord
  validates :name, uniqueness: true, presence: true
end
