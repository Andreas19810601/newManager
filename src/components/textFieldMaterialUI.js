import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import classnames from 'classnames';

/**
 * `AutoComplete` search text can be implemented as a controlled value,
 * where `searchText` is handled by state in the parent component.
 * This value is reset with the `onNewRequest` callback.
 */
export default class TextFieldMaterialUI extends Component {
    constructor(props){
        super(props)
        this.state={
            field: props.field, //
            //value: props.value, 
            label: props.label, //
            error: props.error, //
            type: props.type, 
            //onChange: props.onChange, 
            checkUserExists: props.checkUserExists,
            searchText: '',
            dataSource: [],//
        }
    }

    

  handleUpdateInput = (searchText) => {
    this.setState({
      searchText: searchText,
      
    });
  };

  handleNewRequest = () => {
    this.setState({
      searchText: '',
    });
  };

//   handleUpdateInput = (value) => {
//     this.setState({
//       dataSource: [
//         value,
//         value + value,
//         value + value + value,
//       ],
//     });
//   };

  render() {
      console.log(this.props.value)
    return (
      <div className={classnames('form-group', { 'has-error': this.props.error })}>
        <AutoComplete
          dataSource={this.props.dataSource}
          onUpdateInput={this.handleUpdateInput}
          onNewRequest={this.handleNewRequest}
          floatingLabelText={this.props.label}
          fullWidth={false}
          //value={this.props.value}
          //onChange={this.props.onChange}
          //name={this.props.field}
          type={this.props.type} //auskommentieren ist hier blödsinn obwohl die materialui dieses Property nicht kennt
          errorText={this.props.error}
          filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
          openOnFocus={true}
        />
      </div>
    );
  }
}

TextFieldMaterialUI.defaultProps = {
  type: 'text'
}