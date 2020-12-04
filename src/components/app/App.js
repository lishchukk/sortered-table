import React, {Component, Fragment} from 'react';
import ReactPaginate from 'react-paginate'
import Spinner from "../spinner/spinner";
import Table from "../table/table";
import _ from 'lodash'
import UserInfo from "../user-info/user-info";
import DataModeSelector from "../data-mode-selector/data-mode-selector";
import TableSearch from "../table-search/table-search";
import AddRow from "../add-row/add-row";

class App extends Component {
    state = {
        isDataModeSelected: false,
        isLoading: false,
        data: [],
        sort: 'asc', // or 'desc' (ascending or descending)
        sortField: 'id', //default value
        user: null,
        currentPage: 0,
        search: ''
    };

    async fetchData(url) {
        const response = await fetch(url);
        const data = await response.json();

        this.setState({
            isLoading: false,
            data: _.orderBy(data, this.state.sortField, this.state.sort),// для корректного отображжения сортировки при перезагрузке страницы
        });
    }

    onSort = sortField => {
        //копируем data для иммутабелности
        const cloneData = this.state.data.concat();
        const sort = this.state.sort === 'asc' ? 'desc' : 'asc';
        const data = _.orderBy(cloneData, sortField, sort);// что сортировать, по какому полю, как

        this.setState({data, sort, sortField});

    };

    onAddRow = row => {
        const cloneData = this.state.data.concat();
        cloneData.unshift(row);
        console.log(cloneData);
        this.setState({data: cloneData});
    };

    onUserSelect = user => {
        this.setState({user});
    };

    onSelectDataMode = url => {

        this.setState({
            isDataModeSelected: true,
            isLoading: true,
        });
        this.fetchData(url);
    };

    pageChangeHandler = ({selected}) => {
        this.setState({currentPage: selected});
    };

    getFilteredData = () => {
        const {data, search} = this.state;

        if (!search) {
            return data
        }
        let result = data.filter(item => {
            return (
                item["firstName"].toLowerCase().includes(search.toLowerCase()) ||
                item["lastName"].toLowerCase().includes(search.toLowerCase()) ||
                item["email"].toLowerCase().includes(search.toLowerCase())
            );
        });
        if (!result.length) {
            result = this.state.data
        }
        return result
    };
    onSearchHandler = search => {
        this.setState({search, currentPage: 0})
    };


    render() {
        const {data, isLoading, sort, sortField, user, isDataModeSelected, currentPage} = this.state;

        const filteredData = this.getFilteredData();
        const pageSize = 50;
        const pageCount = Math.ceil(filteredData.length / pageSize);
        const displayData = _.chunk(filteredData, pageSize)[currentPage]; //данные одной страницы

        const table =
            <Fragment>
                <TableSearch onSearch={this.onSearchHandler}/>
                <AddRow onAddRow={this.onAddRow}/>
                <Table data={displayData} onSort={this.onSort}
                       sort={sort} sortField={sortField}
                       onUserSelect={this.onUserSelect}/>
            </Fragment>;

        const loadedTable = isLoading ? <Spinner/> : table;
        const userInfo = user ? <UserInfo user={user}/> : null;


        if (!isDataModeSelected) {
            return (
                <div className='container'>
                    <DataModeSelector onSelectDataMode={this.onSelectDataMode}/>
                </div>
            )
        }

        return (
            <div className="container">
                {loadedTable}

                {
                    data.length > pageSize
                        ? <ReactPaginate
                            previousLabel={'<'}
                            nextLabel={'>'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={this.pageChangeHandler}
                            containerClassName={'pagination'}
                            activeClassName={'active'}
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            nextClassName="page-item"
                            previousLinkClassName="page-link"
                            nextLinkClassName="page-link"
                            forcePage={currentPage}
                        />
                        : null
                }
                {userInfo}


            </div>

        );
    }
}

export default App;