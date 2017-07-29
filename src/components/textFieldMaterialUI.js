import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
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
            // field: props.field, //
            // value: props.value, //
            // label: props.label, //
            // error: props.error, //
            // type: props.type, 
            // onChange: props.onChange, //
            // checkUserExists: props.checkUserExists,
            //dataSource: [],//
        }
    }

  render() {
      console.log(this.props.value)
    return (
      <div className={classnames('form-group', { 'has-error': this.props.error })}>
        <TextField
          onUpdateInput={this.handleUpdateInput}
          floatingLabelText={this.props.label}
          value={this.props.value}
          onChange={this.props.onChange} 
          name={this.props.field}
          type={this.props.type}
          errorText={this.props.error}
        />
      </div>
    );
  }
}
