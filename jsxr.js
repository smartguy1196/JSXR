function JSXR_Req_Func( arguments_object ){
  var URI_array;
  if( arguments_object ){
    if( arguments_object.resource && arguments_object.resource !== null && typeof arguments_object.resource === 'object' ){
      if( arguments_object.resource.protocol ){
        if ( typeof arguments_object.resource.protocol === "string || arguments_object.resource.protocol instanceof String ) ){
        
        }
      }
    }
    if( arguments_object.query && arguments_object.query !== null && typeof arguments_object.query === 'object' ){
    
    }
  }
  else
  {
  
  }
}


var REST_request = function( domain, resource, callback, options ){
  var request = domain + "/" + resource,
      query = {
        "object" : {},
        "string" : ""
      }
  if
  function generate_query( options ){
    
    var result = "", result_length = 0, options;
    if( arguments.length > 0 ){
    
      options = {};
      for (var property in ghp_get.options) {
        options[ property ] = ghp_get.options[ property ]
      }
      
      for (var property in modifier) { 
        if ( modifier.hasOwnProperty( property ) ){
          if ( modifier[ property ].hasOwnProperty( "val" ) ){
            if ( typeof modifier[ property ].val === "string" || modifier[ property ].val instanceof String ){
              options[ property ] = ( modifier[ property ].hasOwnProperty( "o_w" ) ? modifier[ property ].o_w : false ) ? modifier[ property ].val : ( options.hasOwnProperty( property ) ? options[ property ] + "," + modifier[ property ].val : modifier[ property ].val );
            }else if( modifier[ property ].val.constructor === Array ){
              if ( modifier[ property ].hasOwnProperty( "o_w" ) ? modifier[ property ].o_w : false || !options.hasOwnProperty( property ) ) options[ property ] = "";
              for (var i = 0; i < modifier[ property ].val.length; i++) options[ property ] = options[ property ] + modifier[ property ].val[ i ] + ( i !== modifier[ property ].val.length - 1 ? "," : "" );
            }else{
              console.log( "Invalid object passed as an option in the modifier argument.")
            }
          }else{
            console.log( "Invalid object passed as an option in the modifier argument.")
          }
        }
      }
    }else{
      options = ghp_get.options
    }
    
    console.log( options );
    
    for (var property in options) {
      if (options.hasOwnProperty(property)) {
        if (typeof options[ property ] === 'string' || options[ property ] instanceof String){
          result = result + ( result_length === 0 ? "?" : "&" ) + property + "=" + options[ property ]
        	result_length++;
        }
      }
    }
    
    return result;
  }
  
  var HTTP_req = new XMLHttpRequest();
  HTTP_req.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callback( this.responseText );
    }
  };
  HTTP_req.open( "GET", "https://api.github.com/repos/" + owner + "/" + repo + "/issues" + generate_query( modifier ), true );
  HTTP_req.send();
}

var ghp_get = function( owner, repo, callback, modifier )
{
}

ghp_get.options = {
  "labels" : "testing",
  "state" : "all"
}
