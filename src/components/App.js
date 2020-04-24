import React from 'react';
import { Item } from './Item'

export class App extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      items: [],
      isLoading: false,
      enableAutoRefresh: false,
      minComments: 0,
      check: 0
    };

  }

  loader() {
    return (
        <p>...Loading</p>
    )
  }

  componentDidMount() {
    this.getItems();
  }

  getItems = () => {
      this.setState({
        isLoading: true
      });

      fetch("https://www.reddit.com/r/reactjs.json?limit=100").then(response => {
          //Возвращаем цепочку promise в следующий then
          return response.json();
      })
      .then(({ data }) => {

          this.setState({
              items: data.children,
              isLoading: false
          });

      });

  }

  updateAutoRefresh = () => {

    this.setState(
      state => ({
      enableAutoRefresh: !state.enableAutoRefresh
    }), () => {

      if (this.state.enableAutoRefresh) {
        this.autoRefresh = setInterval(this.getItems, 3000);
      } else {
        clearInterval(this.autoRefresh);
      }

    });

  }

  updateMinComments = (event) => {


      //Можно так с Callback функцией
      /*const val = Number(event.target.value);

      this.setState(({ minComments, check }) => {
        return {
          minComments: val,
          check: 21321321
        }
      });*/


      //А можно классическим способом
      this.setState({
        minComments: Number(event.target.value),
        check: 21321321
      });
      

  }

  render() {

    const { items, isLoading, enableAutoRefresh, minComments, check } = this.state;

    const itemsSort = items.filter(item => item.data.num_comments >= minComments).sort(
        (a, b) => b.data.num_comments - a.data.num_comments
    );

    const firstItem = itemsSort[0];

    if (typeof firstItem == 'object') {

      const maxComments = firstItem.data.num_comments;

      return (

          <div>
            <h1>Top commented</h1>
            <div>

              <p>{minComments}</p>

              <button type="button" style={{marginBottom: "15px"}} onClick={this.updateAutoRefresh}>
                { enableAutoRefresh? "Stop" : "Start" } auto-refresh
              </button>
            </div>

            <input
              type="range"
              onChange={this.updateMinComments}
              value={minComments}
              min={0}
              max={maxComments}
              style={{ width: "100%", marginBottom: "15px" }}
              check={check}
            />

            {isLoading ? this.loader() : 

            itemsSort.length > 0 ?

            (itemsSort.map(item => (

              <Item key={item.data.id} data={item.data} />

            ))) : (
                <p>No results found matching your criteria</p>
            )}

          </div>
      );

    } else {
      return false;
    }

  }

}
