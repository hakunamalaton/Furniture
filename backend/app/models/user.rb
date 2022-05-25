class User < ApplicationRecord
    has_many :addresses
    has_many :ratings
    has_many :orders

    has_secure_password

    validates :email, presence: true
end
