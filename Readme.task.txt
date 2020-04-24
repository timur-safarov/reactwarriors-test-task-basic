https://docs.google.com/document/d/1cJrFlpiC-vUOLYGzGzFe6C6bQYuwEDauEgftfLWf0j8/edit

Готовый репозиторий
https://github.com/ReactWarriors/reactwarriors-test-task-basic


You have the  four tasks.
You can use https://codesandbox.io/s/new or create react app
All questions to https://t.me/rw_master_class
Send your decision to https://t.me/reactwarriorsbot

Task #1
Create a following gallery UI using ReactJS
Input data:
Headline: “Top commented.”
Gallery:
Image: (key: “thumbnail”)
Title: (key: “title”)
Number of comments: (key: “num_comments”)
Link: (key: “permalink”)


 
Task #2
Build an application using ReactJS. An application itself should be a custom image gallery. Images should be taken from Reddit: https://www.reddit.com/r/reactjs:
All the data should be fetched using the following JSON: https://www.reddit.com/r/reactjs.json?limit=100
Display “Loading...” status while data for the gallery is loading
Display comments number inside each image as shown on the screenshot. Take it from data.num_comments.
Add Reddit link next to comments counter. Take it from data.permalink.
Sort all images by a number of comments per each image (as shown on a screenshot).


 Task #3
Add auto-refresh feature:
When pressing “Start auto-refresh” button the application should update all image posts in a gallery every 3 seconds. The button changes to “Stop auto-refresh” when pressed.
When pressing “Stop auto-refresh” button the application should stop refreshing data every 3 seconds
Make sure sorting works with this feature


Task #4
Add comments filter:
Add a range slider that filters all gallery image posts by comments number without passing any additional requests
Make sure that sorting works as expected when using the slider
Make sure auto-refresh feature works when using the slider
Display “No results found matching your criteria” message if no image posts found



 
