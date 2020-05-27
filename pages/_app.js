import React from 'react';
import App, { Container } from 'next/app';
import { wrapper } from '../redux';
import Head from 'next/head'

class WrappedApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<>
				<Head>
					<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
				</Head>
				<Component {...pageProps}>
				</Component>
			</>
		)
	}
}

export default wrapper.withRedux(WrappedApp);