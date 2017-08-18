import React from 'react'
// import isEmpty from 'lodash/isEmpty'
// import RaisedButton from 'material-ui/RaisedButton'
// import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Table, Column } from 'react-virtualized'
import 'react-virtualized/styles.css'
import TabsButtons from './tabsButtons'
import styles from 'containers/managerList/index.css'
import { setManagerTableList } from 'containers/managerList/modules'

class ManagerList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentWillMount() {
        this.props.setManagerTableList()
    }

    render() {
        const list = this.props.managerList
        return (
            <div>
                <div>
                    <TabsButtons />
                </div>
                {this.props.firstTableRequestReceived ?
                    (
                        <div className="col-md-1 col-md-offset-1">
                            <Table
                                width={1200}
                                height={600}
                                headerHeight={40}
                                rowHeight={60}
                                rowCount={list.length}
                                rowGetter={({ index }) => list[index]}
                                rowClassName={this.secondRowStyle}
                            >
                                <Column
                                    label='ID'
                                    dataKey='id'
                                    width={50}
                                />
                                <Column
                                    label='Name'
                                    dataKey='name'
                                    width={250}
                                />
                                <Column
                                    width={250}
                                    label='Description'
                                    dataKey='description'
                                />
                                <Column
                                    label='Gender'
                                    dataKey='gender'
                                    width={100}
                                />
                                <Column
                                    label='Postcode'
                                    dataKey='plz'
                                    width={100}
                                />
                                <Column
                                    label='Status'
                                    dataKey='status'
                                    width={100}
                                />
                                <Column
                                    label='Index'
                                    cellDataGetter={({ index }) => list[index]}
                                    dataKey='index'
                                    width={100}
                                />

                            </Table>
                        </div>
                    ) : (<div></div>)}
            </div>
        )
    }
    secondRowStyle = ({ index }) => {
        if (index < 0) {
            //console.log('hello if true')
            return styles.headerRow;
        } else {
            //console.log('else wins')
            return index % 2 === 0 ? styles.evenRow : styles.oddRow;
        }
    }
}
const mapStateToProps = state => ({
    managerList: state.managerListData.managerList,
    firstTableRequestReceived: state.managerListData.firstTableRequestReceived,
})

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        setManagerTableList
    },
    dispatch
)
export default connect(mapStateToProps, mapDispatchToProps)(ManagerList)