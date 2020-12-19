import {MAP_PARTS} from './Api';
import {Table} from 'antd';
import React from 'react';
import { parseType } from 'graphql';

export default function Table() {
    return (
        <div>
            <Table >
                {parts.map(part =>(
                    <tbody key={part.id}>
                        <tr>
                            <td>{part.image}</td>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    )
}
