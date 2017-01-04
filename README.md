# react-tindercards

I noticed all of the other tinder react projects are complicated and I wanted an simpler version where you can get started and understand the code as easy and fast as possible

## Demo:

[Renders one card at an time](https://gyazo.com/65b156e5647acd7b7a6fc50f883829d3f)

**It renders one card at an time for increased performance and less load**

[Functions are attached](https://gyazo.com/cf34c95419a14c06749e61f6ce83046b)

**The like and dislike function is already attached**

Requirements: 

1) Bootstrap V4 (For the cards)

2) Reactjs (well...)

3) Jquery (For bootstrap)

4) Tether (For bootstrap)

### Installing

1)
   ``` JavaScript
  <script src="https://npmcdn.com/react@15.3.0/dist/react.js"></script> 
  <script src="https://npmcdn.com/react-dom@15.3.0/dist/react-dom.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
  <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
  <script src="https://npmcdn.com/tether@1.2.4/dist/js/tether.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/css/bootstrap.min.css">
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/js/bootstrap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.1/JSXTransformer.js"></script>
  <script type="text/babel" src="src/main.js"></script>
  ```
  Include all the scripts and bootstrap css
  
2) 
   ``` JavaScript
   <div id="container"></div>
   ```
   Insert this in the html

3)
   **inside the main.js**
   ``` JavaScript
                 "posts": [
                {
                  "title": "Hello ",
                  "body": "My name is ",
                  "id": "1"
                },
                {
                  "title": "testing",
                  "body": "testing",
                  "id":"2"
                }
              ]
            }
   ```
      Change the file as much as you want or use a json file.
      
 4)
    Enjoy




## Contributing

1) Fork the project

2) Make your changes

3) Sumbit the changes as an pull request to this project


## License

This project is licensed under the MIT License. You already know.

Please still give credit where its due however. I worked hard on this project :)


