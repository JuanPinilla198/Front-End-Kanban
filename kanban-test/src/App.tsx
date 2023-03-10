import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import logo from './logo.svg';
import './App.css';
import { ColumnDirective, ColumnsDirective, KanbanComponent } from '@syncfusion/ej2-react-kanban/src';

class App extends React.Component {
  render() {
      return(<KanbanComponent>
        <ColumnsDirective>
          <ColumnDirective headerText='To Do' keyField="Open"></ColumnDirective>
          <ColumnDirective headerText='In Progress' keyField="In Progress"></ColumnDirective>
          <ColumnDirective headerText='Testing' keyField="Testing" ></ColumnDirective>
          <ColumnDirective headerText='Close' keyField="Close" ></ColumnDirective>
        </ColumnsDirective>
      </KanbanComponent>);
  }
}

export default App;
