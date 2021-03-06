require 'rails_helper'

RSpec.describe Book, type: :model do
  before do
    @book = FactoryGirl.create(:book)
  end

  describe 'name' do
    it 'should be present' do
      @book.name = nil
      expect(@book).to_not be_valid
    end
  end
end
