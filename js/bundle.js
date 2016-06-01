(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by Administrator on 2016/06/01.
 */

var ImageWrap = React.createClass({displayName: "ImageWrap",
    getInitialState : function(){
        return {
            imgSize : {}
        }
    },
    componentDidMount : function(){
        var arr = [];
        var ok = [];
        var obj = {};
        var _this = this;
        for (let k in this.refs){
            if(this.refs.hasOwnProperty(k)){
                arr.push(this.refs[k]);
                this.refs[k].onload = function(){
                    ok.push(1);
                    obj[k] = this;
                    if(ok.length === arr.length){
                        _this.setState({imgSize:obj});
                    }
                };
            }
        }
    },
    render : function(){
        var images = this.props.Image.map(function(item,i){
            if(this.state.imgSize['item-'+i]){
                return (
                    React.createElement("div", {key: i, className: "item", style: {width:(this.state.imgSize['item-'+i].naturalWidth*item.h/this.state.imgSize['item-'+i].naturalHeight)+'px',flexGrow:(this.state.imgSize['item-'+i].naturalWidth*item.h/this.state.imgSize['item-'+i].naturalHeight)}}, 
                        React.createElement("img", {src: item.src, ref: 'item-'+i}), 
                        React.createElement("i", {style: {paddingBottom:(this.state.imgSize['item-'+i].naturalHeight/this.state.imgSize['item-'+i].naturalWidth)*100+'%'}})
                    )
                )
            }else {
                return (
                    React.createElement("div", {key: i, className: "item"}, 
                        React.createElement("img", {src: item.src, ref: 'item-'+i}), 
                        React.createElement("i", null)
                    )
                )
            }
        }.bind(this));
        return (
            React.createElement("div", {className: "wrap"}, 
                images
            )
        )
    }
});

var data = [];
for (let i=1;i<55;i++){
    data.push(
        {
            src :'./images/'+i+'.jpg',
            h : 200
        }
    )
}

ReactDOM.render(
    React.createElement(ImageWrap, {Image: data}),
    document.getElementById('content')
);
},{}]},{},[1]);
