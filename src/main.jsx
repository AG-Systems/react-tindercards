  var counter = 1;
  const divStyle = {
    width: 350,
    margin: 0
      };
    function nextcard(checker)
    {
      $("." + checker).remove();
      checker++;
      $("."+checker).show();
    }
    var List = React.createClass({
        like: function () {
            nextcard(counter);
            console.log("like");
            counter += 1;
        },
        dislike: function () {
            nextcard(counter);
            console.log("dislike");
            counter += 1;
        },
        render: function() {
          
          return (
            <ul>
              {this.props.list.map(( post,index )=>
                <div id="main" style={divStyle} className={post.id}>
                      <div className="card">
                        <img className="card-img-top" src="https://placehold.it/350x150" alt="Card image cap" />
                        <div className="card-block">
                          <h4 className="card-title">{ post.title }</h4>
                          <p className="card-text">{ post.body }</p>
                          <button type='button' onClick={this.like} className="btn btn-primary"> Yes, I'm Interested </button>
                          <button type='button' onClick={this.dislike} className="btn btn-danger"> No, Skip </button>
                        </div>
                      </div>
                  </div>
              )} 
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
