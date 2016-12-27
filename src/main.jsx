window.onload = function() {    
    var List = React.createClass({
        render: function() {
          return (
            <div>
              {this.props.list.map( post =>
                <div id="main" className={post.id}>
                    <div className="card">
                      <img className="card-img-top" src="https://placehold.it/350x150" alt="Card image cap" />
                      <div className="card-block">
                        <h4 className="card-title">{ post.title }</h4>
                        <p className="card-text">{ post.body }</p>
                        <button type='button' className="btn btn-primary"> Yes, I'm Interested </button>
                        <button type='button' className="btn btn-danger"> No, Skip </button>
                      </div>
                    </div>
                </div>
              )}
            </div>
          )
        }
      });
    var Playlist = React.createClass({
      render() {
        let post = {
              "posts": [
                {
                  "title": "Hello ",
                  "body": "My name is ",
                  "id": "1"
                },
                {
                  "title": "send me pics",
                  "body": "please",
                  "id":"2"
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

    var counter = 1;
    $( ".btn-primary" ).click(function() 
    {
      $("."+ counter).hide();
      counter++;
      $("." + counter).fadeIn();
    });
    for(var z = 3; z > counter;z--)
    {
        $("." + z).hide();
    }

};
