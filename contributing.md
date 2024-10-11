# Contributing
This isn't really a guide yet, more an outline on how I am currently developing the project. If you do want to contribute, please [contact me][portfolio].

## Adding new functionality to the wrapper
Here is a very rough overview of the steps I take to add a new feature:
1. Outline what the feature should do and where in the code it will fit (Can it be added to an existing class, or does it need its own class?)
1. Go through the actions in the Storytel mobile app, and inspect the network traffic with [mitmproxy].
1. Write code to copy the request(s) needed for the feature
1. If needed, add types for the response
1. Write tests to accompany the new feature\
This is _after_ programming, because usually it is unclear what the exact functionality of an API endpoint is during development.
 


<!-- Links -->
[portfolio]:https://www.mauritswilke.com/
[mitmproxy]:https://mitmproxy.org/