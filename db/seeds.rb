require "faker"

#for i in 1..10
#  Post.create(title: Faker::Hacker.noun + " " + Faker::Hacker.verb + " " + Faker::Hacker.ingverb + "?",
#              body: Faker::Lorem.paragraph(sentence_count: 5))
#end

for i in 1..10
  Comment.create(body: Faker::Hacker.say_something_smart, post_id: rand(41..50), user_account_id: 1)
end
