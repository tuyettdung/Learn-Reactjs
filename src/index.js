import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import './index.scss';

//Cấu hình react router dom:
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ReactForm from './pages/ReactForm/ReactForm'
import ReactLifecycle from './pages/ReactLifeCycle/ReactLifecycle';

//Cài đặt Redux:
import {Provider} from 'react-redux';
import {store} from './redux/configStore'
import DemoTangGiamSL from './pages/DemoRedux/DemoTangGiamSL/DemoTangGiamSL';
import DemoChonXe from './pages/DemoRedux/DemoChonXe/DemoChonXe';
import DemoFormComment from './pages/DemoRedux/DemoFormComment/DemoFormComment';
import DemoBurger from './pages/DemoRedux/DemoBurger/DemoBurger';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
        <Routes>
            <Route path='' element={<App />}>
                <Route path='' element={<Home />}></Route>
                <Route path='contact' element={<Contact />}></Route>
                <Route path='about' element={<About />}></Route>
                <Route path='reactform' element={<ReactForm />}></Route>
                <Route path='lifecycle' element={<ReactLifecycle />}></Route>
                <Route path='demonumber' element={<DemoTangGiamSL />}></Route>
                <Route path='demochonxe' element={<DemoChonXe />}></Route>
                <Route path='demoformcomment' element={<DemoFormComment />}></Route>
                <Route path='demoburger' element={<DemoBurger />}></Route>
                {/* <Route path='*' element={<Navigate to="" />}></Route> */}
                
            </Route>
            {/* <Route path='' element={<Contact />}>

            </Route> */}

        </Routes>
    </BrowserRouter>
    </Provider>
    
);



