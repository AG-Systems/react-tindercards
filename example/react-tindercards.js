  var counter = 0;
  const divStyle = {
    width: 350,
    margin: 0
      };
    var List = React.createClass({
        like: function () {
            console.log("like");
            // Need to fix this
            if(counter >= 1)
            {
              counter += 2;
            }
            else
            {
              counter += 1;
            }
            this.forceUpdate();
            /* if you want the fade effect.
              $("#main").hide();
              $("#main").fadeIn();
            */
        },
        dislike: function () {
            console.log("dislike");
            // Need to fix this
            if(counter >= 1)
            {
              counter += 2;
            }
            else
            {
              counter += 1;
            }
            this.forceUpdate();
        },
        render: function() {
          var current = this.props.list[counter];
          return (
            <ul>
                <div id="main" style={divStyle} className={this.props.list[counter].id }>
                      <div className="card" >
                        <img className="card-img-top" src={this.props.list[counter].img} alt="Card image cap" />
                        <div className="card-block">
                          <h4 className="card-title">{ this.props.list[counter].title }</h4>
                          <p className="card-text">{ this.props.list[counter].body }</p>
                          <button type='button' onClick={this.like} className="btn btn-primary"> Yes, I'm Interested </button>
                          <button type='button' onClick={this.dislike} className="btn btn-danger"> No, Skip </button>
                        </div>
                      </div>
                  </div>
            </ul>
          )
        }
      });
    var Playlist = React.createClass({
      render() {
        let post = {
              "posts": [
                {
                  "title": "Auriga ",
                  "body": "Hey, thats my creators name!",
                  "img": "img/1.jpg",
                  "id": "1"
                },
                {
                  "title": "Galaxy",
                  "body": "The unknown space",
                  "img": "img/2.jpg",
                  "id":"2"
                },
                ,
                {
                  "title": "Nebula",
                  "body": "Space far far away",
                  "img": "img/3.jpg",
                  "id":"3"
                },
                ,
                {
                  "title": "Nova",
                  "body": "No bio is given",
                  "img": "img/4.jpg",
                  "id":"4"
                },
                ,
                {
                  "title": "Afterglow",
                  "body": "Glowing like an diamond",
                  "img" : "img/5.jpg",
                  "id":"5"
                },
                ,
                {
                  "title": "Master",
                  "body": "Thats the branch",
                  "img": "img/6.jpg",
                  "id":"6"
                }
              ]
            }
        return (
            <List list={post.posts} />
        )
      }
    });
    
    ReactDOM.render(
      <Playlist/>, 
      document.getElementById('container')
    );
