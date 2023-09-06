# Extreme Startup
Instructions and a collection of boilerplates for the Extreme Startup Workshop on our Hamburg KTrip

## What should I do?
Some steps to get ready: 

### Form a team!
1. Find a team! Only requirement is that you're comfortable in the same language. 2-3 people is probably most fun
2. Pick a team name (important)

### Setup computer stuff
No stress on this part, we'll wait for everyone to get this running, 
and it can (but hopefully won't 🤞) take too long.

1. Pick the language your group will use (either from the boilerplates or another)
2. Familiarise yourself with the code
3. Start your server
4. Find out which port it's using
5. Find your ip adress on this local network
  a. Mac/Linux: run `ifconfig | grep "inet " | grep -Fv 127.0.0.1 | awk '{print $2}'`
  b. Windows: not sure, check https://superuser.com/questions/719268/how-to-get-network-ip-address-via-windows-command-prompt
6. Await further instructions

#### I want to use a language that's not in the boilerplates
Sure, you need to kinda quickly setup a server which can
receive requests, read the query parameter and then 
answer the requests. Ask Filip if you've got more questions.
