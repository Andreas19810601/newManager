import React from 'react'
// import isEmpty from 'lodash/isEmpty'
// import RaisedButton from 'material-ui/RaisedButton'
// import TextField from 'material-ui/TextField'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { Table, Column } from 'react-virtualized'
import 'react-virtualized/styles.css'
import TabsButtons from './tabsButtons'

class ManagerList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const list = [
            { id: '1', nickname: 'Doro', name: 'Number One', description: 'Software engineer', gender: 'female', plz: '545123', status: 'activ' },
            { id: '2', nickname: 'huhu', name: 'Jurij Koch', description: 'Software engineer', gender: 'male', plz: '22044', status: 'inactiv' },
            { id: '3', nickname: 'Wohu', name: 'Andreas Franck', description: 'Software engineer', gender: 'male', plz: '22041', status: 'activ' },
            { id: '4', nickname: 'HAHAHI', name: 'Heiner Lauterbach', description: 'Actor', gender: 'male', plz: '7745', status: 'inactiv' },
            { id: '5', nickname: 'jaisd', name: 'Bruce Willis', description: 'asdsgd', gender: 'male', plz: '545222', status: 'activ' },
            { id: '6', nickname: 'ksgbv', name: 'Jessica Alba', description: 'afssgsdv', gender: 'female', plz: '54123', status: 'blocked' },
            { id: '7', nickname: 'ekuz', name: 'Dexter Morgan', description: 'asdafsdafsa', gender: 'male', plz: '45623', status: 'blocked' },
            { id: '8', nickname: 'oalsdj', name: 'huhu der Bär', description: 'xcvxcv', gender: 'male', plz: '98523', status: 'activ' },
            { id: '9', nickname: 'jsbdc', name: 'tester eins', description: 'dfgfdgf', gender: 'female', plz: '5453', status: 'inactiv' },
            { id: '10', nickname: 'jkcxj', name: 'tester zwei', description: 'erzergfs', gender: 'male', plz: '56541', status: 'activ' },
            { id: '11', nickname: 'tewfsd', name: 'rechtsLinks', description: 'dfgdfbdf', gender: 'female', plz: '32564', status: 'inactiv' },
            { id: '12', nickname: 'ngtzrhe', name: 'dritter von fünf', description: 'dfhrrthdbf', gender: 'male', plz: '12458', status: 'activ' },
        ];
        return (
            <div>
                <div>
                    <TabsButtons/>
                </div>

                <div className="col-md-1 col-md-offset-1">
                    <Table
                        width={1200}
                        height={600}
                        headerHeight={40}
                        rowHeight={60}
                        rowCount={list.length}
                        rowGetter={({ index }) => list[index]}
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

                    </Table>
                </div>
            </div>
        )
    }

}

export default ManagerList