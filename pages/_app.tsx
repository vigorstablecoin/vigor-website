import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../utils/theme'


export default class Providers extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}