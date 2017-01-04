  var counter = 0;
  const divStyle = {
    width: 350,
    margin: 0
      };
    var List = React.createClass({
        like: function () {
            console.log("like");
            counter += 1;
            this.forceUpdate()
        },
        dislike: function () {
            console.log("dislike");
            counter += 1;
            this.forceUpdate()
        },
        render: function() {
          var current = this.props.list[counter];
          return (
            <ul>
                <div id="main" style={divStyle} className={this.props.list[counter].id }>
                      <div className="card" >
                        <img className="card-img-top" src="https://placehold.it/350x150" alt="Card image cap" />
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
                  "title": "Person1 ",
                  "body": "bio1 ",
                  "id": "1"
                },
                {
                  "title": "Person2",
                  "body": "bio2",
                  "id":"2"
                },
                ,
                {
                  "title": "Person3",
                  "body": "bio3",
                  "id":"3"
                },
                ,
                {
                  "title": "Person4",
                  "body": "bio4",
                  "id":"4"
                },
                ,
                {
                  "title": "Person5",
                  "body": "bio5",
                  "id":"5"
                },
                ,
                {
                  "title": "Person6",
                  "body": "bio6",
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
