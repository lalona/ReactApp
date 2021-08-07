import React from 'react';
import logo from './logo.svg';
import './App.css';
import MetaTags from 'react-meta-tags';
import { ReactTitle } from 'react-meta-tags';
import useScript from 'hooks/useScript';
import Dashboard from './components/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  /*
  <script>!function (e) { function r(r) { for (var n, p, l = r[0], a = r[1], i = r[2], c = 0, s = []; c < l.length; c++)p = l[c], Object.prototype.hasOwnProperty.call(o, p) && o[p] && s.push(o[p][0]), o[p] = 0; for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]); for (f && f(r); s.length;)s.shift()(); return u.push.apply(u, i || []), t() } function t() { for (var e, r = 0; r < u.length; r++) { for (var t = u[r], n = !0, l = 1; l < t.length; l++) { var a = t[l]; 0 !== o[a] && (n = !1) } n && (u.splice(r--, 1), e = p(p.s = t[0])) } return e } var n = {}, o = { 1: 0 }, u = []; function p(r) { if (n[r]) return n[r].exports; var t = n[r] = { i: r, l: !1, exports: {} }; return e[r].call(t.exports, t, t.exports, p), t.l = !0, t.exports } p.m = e, p.c = n, p.d = function (e, r, t) { p.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: t }) }, p.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, p.t = function (e, r) { if (1 & r && (e = p(e)), 8 & r) return e; if (4 & r && "object" == typeof e && e && e.__esModule) return e; var t = Object.create(null); if (p.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: e }), 2 & r && "string" != typeof e) for (var n in e) p.d(t, n, function (r) { return e[r] }.bind(null, n)); return t }, p.n = function (e) { var r = e && e.__esModule ? function () { return e.default } : function () { return e }; return p.d(r, "a", r), r }, p.o = function (e, r) { return Object.prototype.hasOwnProperty.call(e, r) }, p.p = "../../resource/my-app/build/"; var l = this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || [], a = l.push.bind(l); l.push = r, l = l.slice(); for (var i = 0; i < l.length; i++)r(l[i]); var f = a; t() }([])</script>
    <script src="../../resource/my-app/build/static/js/2.2f5ef2c2.chunk.js"></script>
    <script src="../../resource/my-app/build/static/js/main.9e452377.chunk.js"></script>
    <!-- Specific JS goes HERE --> 
    <script src="/local/static/forecast-dashboard/js/argon.js?v=1.2.0"></script>
    <script src="/local/static/forecast-dashboard/vendor/jquery/jquery.min.js"></script>
    <script src="/local/static/forecast-dashboard/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="/local/static/forecast-dashboard/vendor/js-cookie/js.cookie.js"></script>
    <script src="/local/static/forecast-dashboard/vendor/jquery.scrollbar/jquery.scrollbar.min.js"></script>
    <script src="/local/static/forecast-dashboard/vendor/jquery-scroll-lock/jquery-scrollLock.min.js"></script>
  */

  return (
    <Router>
      <MetaTags>
        <title>Production BU Forecast</title>
        <link rel="icon" href="../../resource/my-app/build/favicon.ico" />
        <link rel="apple-touch-icon" href="../../resource/my-app/build/logo192.png" />
        <link rel="manifest" href="../../resource/my-app/build/manifest.json" />
        <link href="../../resource/my-app/build/static/css/main.5f361e03.chunk.css" rel="stylesheet" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using create-react-app" />

        {/* <!-- Favicon - loaded as static --> */}
        <link rel="icon" href="/local/static/forecast-dashboard/img/brand/jnjlogo.png" type="image/png" />
        {/* <!-- Fonts --> */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" />
        {/* <!-- Icons --> */}
        <link rel="stylesheet" href="/local/static/forecast-dashboard/css/nucleo.css" type="text/css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" type="text/css" />
        {/* <!-- Page plugins --> */}
        {/* <!-- Argoncss --> */}
        <link rel="stylesheet" href="/local/static/forecast-dashboard/css/argon.css?v=1.2.0" type="text/css" />

        {/* <!-- Specific css goes HERE --> */}
        <link rel="stylesheet" href="/local/static/forecast-dashboard/css/main.css" type="text/css" />
        <link rel="stylesheet" href="/local/static/forecast-dashboard/css/fonts.css" type="text/css" />

        <script type="text/javascript" src=" js/stylesheet.js"></script>
        <link id="pagestyle" rel="stylesheet" href="/local/static/forecast-dashboard/css/grid-card.css" type="text/css" />
        <link id="pagestyle" rel="stylesheet" href="/local/static/forecast-dashboard/css/daily-card.css" type="text/css" />
        <link id="pagestyle" rel="stylesheet" href="/local/static/forecast-dashboard/modal.css" type="text/css" />
        <link id="pagestyle" rel="stylesheet" href="/local/static/forecast-dashboard/css/profile.css" type="text/css" />
        <link id="pagestyle" rel="stylesheet" href="/local/static/forecast-dashboard/css/filters.css" type="text/css" />
        <link id="pagestyle" rel="stylesheet" href="/local/static/forecast-dashboard/css/graphs.css" type="text/css" />
        <link id="pagestyle" rel="stylesheet" href="/local/static/forecast-dashboard/css/sidebar.css" type="text/css" />
        <link id="pagestyle" rel="stylesheet" href="/local/static/forecast-dashboard/css/navtop.css" type="text/css" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.3.2/chart.js" integrity="sha512-CAv0l04Voko2LIdaPmkvGjH3jLsH+pmTXKFoyh5TIimAME93KjejeP9j7wSeSRXqXForv73KUZGJMn8/P98Ifg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"></script>

        <script>!function (e) {function r(r) { for (var n, p, l = r[0], a = r[1], i = r[2], c = 0, s = []; c < l.length; c++)p = l[c], Object.prototype.hasOwnProperty.call(o, p) && o[p] && s.push(o[p][0]), o[p] = 0; for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]); for (f && f(r); s.length;)s.shift()(); return u.push.apply(u, i || []), t() } function t() { for (var e, r = 0; r < u.length; r++) { for (var t = u[r], n = !0, l = 1; l < t.length; l++) { var a = t[l]; 0 !== o[a] && (n = !1) } n && (u.splice(r--, 1), e = p(p.s = t[0])) } return e } var n = { }, o = {1: 0 }, u = []; function p(r) { if (n[r]) return n[r].exports; var t = n[r] = {i: r, l: !1, exports: { } }; return e[r].call(t.exports, t, t.exports, p), t.l = !0, t.exports } p.m = e, p.c = n, p.d = function (e, r, t) {p.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: t })}, p.r = function (e) {"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 })}, p.t = function (e, r) { if (1 & r && (e = p(e)), 8 & r) return e; if (4 & r && "object" == typeof e && e && e.__esModule) return e; var t = Object.create(null); if (p.r(t), Object.defineProperty(t, "default", {enumerable: !0, value: e }), 2 & r && "string" != typeof e) for (var n in e) p.d(t, n, function (r) { return e[r] }.bind(null, n)); return t }, p.n = function (e) { var r = e && e.__esModule ? function () { return e.default } : function () { return e }; return p.d(r, "a", r), r }, p.o = function (e, r) { return Object.prototype.hasOwnProperty.call(e, r) }, p.p = "../../resource/my-app/build/"; var l = this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || [], a = l.push.bind(l); l.push = r, l = l.slice(); for (var i = 0; i < l.length; i++)r(l[i]); var f = a; t() }([])</script>
        <script src="../../resource/my-app/build/static/js/2.2f5ef2c2.chunk.js"></script>
        <script src="../../resource/my-app/build/static/js/main.9e452377.chunk.js"></script>
        {/* <!-- Specific JS goes HERE -->  */}
        <script src="/local/static/forecast-dashboard/js/argon.js?v=1.2.0"></script>
        <script src="/local/static/forecast-dashboard/vendor/jquery/jquery.min.js"></script>
        <script src="/local/static/forecast-dashboard/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/local/static/forecast-dashboard/vendor/js-cookie/js.cookie.js"></script>
        <script src="/local/static/forecast-dashboard/vendor/jquery.scrollbar/jquery.scrollbar.min.js"></script>
        <script src="/local/static/forecast-dashboard/vendor/jquery-scroll-lock/jquery-scrollLock.min.js"></script>

      </MetaTags>
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Dashboard />
      </div>
    </Router>
  );
}

export default App;
