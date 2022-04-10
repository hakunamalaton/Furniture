class Order < ApplicationRecord
  belongs_to :user
  has_and_belongs_to_many :products

  after_save :do_something

  private

  def do_something
    p "Yup, I have done something"
  end
end
