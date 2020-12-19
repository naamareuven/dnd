import {Grid} from './Grid';
import {Carousel} from './backgrounds/Carousel';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import React, { Component } from 'react'

export default class Print extends Component {
    render() {
        return (
            <div>
              <Document>
                  <Page size="A4">
                      <Grid>
                      <Carousel>
                      </Carousel>
                      </Grid>
                  </Page>
                  </Document> 
            </div>
        )
    }
}
