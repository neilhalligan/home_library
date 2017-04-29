require 'rails_helper'
require 'spec_helper'
require 'factory_girl_rails'

RSpec.describe BooksController, type: :controller do

  let(:valid_attributes) {
    FactoryGirl.build(:book).attributes
  }

  let(:invalid_attributes) {
    FactoryGirl.build(:book, name: nil).attributes
  }

  let(:valid_session) { {} }

  describe "GET #index" do
    it "assigns all books as @books" do
      book = Book.create! valid_attributes
      get :index, params: {}, session: valid_session
      expect(assigns(:books)).to eq([book])
    end
  end

  describe "GET #show" do
    it "assigns the requested book as @book" do
      book = Book.create! valid_attributes
      get :show, params: {id: book.to_param}, session: valid_session
      expect(assigns(:book)).to eq(book)
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "creates a new Book" do
        expect {
          post :create, params: {book: valid_attributes}, session: valid_session
        }.to change(Book, :count).by(1)
      end

      it "assigns a newly created book as @book" do
        post :create, params: {book: valid_attributes}, session: valid_session
        expect(assigns(:book)).to be_a(Book)
        expect(assigns(:book)).to be_persisted
      end
    end

    context "with invalid params" do
      it "assigns a newly created but unsaved book as @book" do
        post :create, params: {book: invalid_attributes}, session: valid_session
        expect(assigns(:book)).to be_a_new(Book)
      end
    end
  end

  describe "PUT #update" do
    context "with valid params" do
      let(:new_attributes) {
        valid_attributes.merge(name: "Some Other Name")
      }

      it "updates the requested book" do
        book = Book.create! valid_attributes
        put :update, params: {id: book.to_param, book: new_attributes}, session: valid_session
        book.reload
        expect(assigns(:book).name).to eq("Some Other Name")
      end

      it "assigns the requested book as @book" do
        book = Book.create! valid_attributes
        put :update, params: {id: book.to_param, book: valid_attributes}, session: valid_session
        expect(assigns(:book)).to eq(book)
      end
    end

    context "with invalid params" do
      it "assigns the book as @book" do
        book = Book.create! valid_attributes
        put :update, params: {id: book.to_param, book: invalid_attributes}, session: valid_session
        expect(assigns(:book)).to eq(book)
      end
    end
  end

  describe "DELETE #destroy" do
    it "destroys the requested book" do
      book = Book.create! valid_attributes
      expect {
        delete :destroy, params: {id: book.to_param}, session: valid_session
      }.to change(Book, :count).by(-1)
    end
  end

end
