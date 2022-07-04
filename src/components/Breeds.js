import React,{Component} from "react";
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';
import Select from "react-select";



let dogdata = {

}
const url = "https://api.thecatapi.com/v1/breeds?api_key=a75dc5be-ed7a-4ea0-9c74-10ed2648c2bf";
fetch(url, {
  method: "GET",
  
})
.then(resp => resp.json())
  .then(function(data) {
    dogdata = data;
  })
  .catch(function(error) {
    console.log(error);
  });

function comp(a,b){
    return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
}
const Breeds = () => {

    let state = {
        options: dogdata
    };
    
        return (
            <div style={{marginLeft:'40%', marginTop: '60px'}}>
      
      <Select
        options={state.options.sort()}
        style={{ width: 300 }}
      />
      
    </div>
        );
    
};

export default Breeds;