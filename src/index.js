import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './components/Layout'
import './styles/tailwind.css'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Layout />, document.getElementById('root'))
registerServiceWorker()
