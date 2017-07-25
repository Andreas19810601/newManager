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
            dataSource: [],
        }
    }

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  render() {
      console.log(this.props.value)
    return (
      <div className={classnames('form-group', { 'has-error': this.props.error })}>
        <AutoComplete
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          floatingLabelText={this.props.label}
          fullWidth={false}
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

TextFieldMaterialUI.defaultProps = {
  type: 'text'
}