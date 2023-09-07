# Extreme Startup
Instructions and a collection of boilerplates for the Extreme Startup Workshop on our Hamburg KTrip

## What should I do?
Some steps to get ready: 

### Form a team!
1. Find a team! You should be okay with using the same programming language
    - 2-3 people is probably most fun
2. Pick a team name (important)

### Setup computer stuff
No stress on this part, we'll wait for everyone to get this running, and it can (but hopefully won't 🤞) take too long.

0. Get on the correct wifi (probably `Filip's iPhone`, password `devoteam`)
    - Let's hope this works 🤞
2. Pick the language your group will use (either from the boilerplates or another)
3. Familiarise yourself with the code
4. Start your server and Find out which port it's using
5. Find your ip adress on this local network
    - Mac/Linux: run `ifconfig | grep "inet " | grep -Fv 127.0.0.1 | awk '{print $2}'`
    - Windows: not sure, check https://superuser.com/questions/719268/how-to-get-network-ip-address-via-windows-command-prompt
6. Await test round

### I want to use a language that's not in the boilerplates
Sure! Setting up everything is on you though, and we can't wait forever. Quickly setup a server which can receive requests, read the query parameters and then answer the requests.

Ask Filip if you've got more questions.
