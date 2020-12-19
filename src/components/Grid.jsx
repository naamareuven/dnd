import React, { Component } from 'react';
import {Table} from 'antd';

export class Grid extends Component {
    render() {
        return (
            <div onDrop= {event => this.onDrop(event)}
            onDragOver={event => this.onDragOver(event)}
            >
               <Table>
                   <tr>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                   </tr>
                   <tr>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                   </tr>
                   <tr>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                   </tr>
                   <tr>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                   </tr>
                   
                   </Table> 
            </div>
        )
    }
}

export default Grid
