import React from 'react';
import { connect } from 'react-redux';
import Locale from '../src/locale'

// 多语言国际化
import { IntlProvider } from 'react-intl'

// 引入路由
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// 引入全局页面
import Page from '../src/views/page';
import Home from '../src/views/home';


const App = props => {
    return (
      <IntlProvider 
      locale={props.lang}
      messages={Locale[props.lang]}
      >
          <Router>
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/" component={Page} />
              </Switch>
          </Router>
      </IntlProvider>
    );
}


const mapStateToProps = state => {
  const {lang} = state.clientData;
  return {lang};
};


export default connect(mapStateToProps)(App);
