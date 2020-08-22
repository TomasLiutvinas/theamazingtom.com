import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Gif from './Gif.jsx';

class RichTextParagraph extends Component {
  render() {

    function isObject(item){
      return Object.prototype.toString.call(item) === '[object Object]';
    }

    function isArray(item){
      return Object.prototype.toString.call(item) === '[object Array]';
    }

    function isString(item){
      return Object.prototype.toString.call(item) === '[object String]';
    }

    var tags = ['bold',
     'italic',
     'semibold',
     'light',
     'thin',
     'gif',
     'subheader',
     'subscript',
     'superscript',
     'listitem',
     'weblink',
     'image',
     'reference',
     'fbembed'
     ];
    var paragraph = this.props.paragraph;

    function GetBlockMatchesFromBlock(block, tags){
        if(isObject(block)){
            if(isArray(block.value)){
                return GetBlockMatchesFromBlockArray(block, tags);
            }else{
                if(BlockMatchesTag(block, tags)){
                    var tag = BlockMatchesTag(block, tags);
                    return CreateArrayWithObject(block, tag);
                }else{
                    return block;
                }    
            }
      }else if(isArray(block)){
        return GetBlockMatchesFromBlockArray(block, tags);
      }else{
        if(BlockMatchesTag(block, tags)){
            var matchedTag = BlockMatchesTag(block, tags);
          return CreateArrayWithObject(block,matchedTag);
        }else{
          return block;
        }
      }
    }

function GetBlockMatchesFromBlockArray(blockArray, tags){
  var matches = [];
  for(var baIndex = 0; baIndex < blockArray.length;baIndex++){
    var result = GetBlockMatchesFromBlock(blockArray[baIndex], tags);
    if(isObject(result)){
      if(isArray(result.value)){
        matches.push(GetBlockMatchesFromBlockArray(result.value, tags));
      }else if(isObject(result.value)){
        matches.push(GetBlockMatchesFromBlock(result.value, tags));
      }else{
        matches.push(result); 
      }
    }else if(typeof(result) === 'string'){
      matches.push(result);
    }else if(isArray(result)){
      matches.push(GetBlockMatchesFromBlockArray(result, tags));
    }else{
      matches.push(GetBlockMatchesFromBlock(result, tags));
    }
  }
  return matches;
}

function BlockMatchesTag(block, tags){
  if(isObject(block)){
    return BlockMatchesTag(block.value, tags);
  }else if(isArray(block)){
    console.log('pls no');
    return false;
  }else{
      return MatchesTag(block,tags);
  }
}

function MatchesTag(block, tags){
    var matchIndex = null;
    var result = null;
    
    for(var i = 0;i < tags.length;i++){
        var tag = tags[i];
        var regex = new RegExp('{'+tag+'}(.*?){/'+tag+'}', 'g');
        var matches = block.match(regex);
        if(matches){
            var newMatchIndex = block.indexOf(matches[0]);
            if(matchIndex == null || newMatchIndex < matchIndex){
                result = tag;
                matchIndex = newMatchIndex;
            }
        }
    }
    if(result){
        return result;
    }else{
        return false;
    }
}

function CreateArrayWithObject(block, tag){
  var regex = new RegExp('{'+tag+'}(.*?){/'+tag+'}', 'g');
  var firstMatch, start, end, preceding,receding,value;

  if(!isObject(block)){
    firstMatch = block.match(regex)[0];
    start = block.indexOf(firstMatch);
    end = start + firstMatch.length;
    preceding = block.substring(0,start);
    value = block.substring(start,end);
    value = value.replace('{'+tag+'}','').replace('{/'+tag+'}','');
    receding = block.substring(end, block.length);

    return [preceding,{classes:[tag], value:value}, receding];
  }else{
    firstMatch = block.value.match(regex)[0];
    start = block.value.indexOf(firstMatch);
    end = start + firstMatch.length;
    preceding = block.value.substring(0,start);
    value = block.value.substring(start,end);
    value = value.replace('{'+tag+'}','').replace('{/'+tag+'}','');
    receding = block.value.substring(end, block.length);
    var deeperClasses = [tag];
    Array.prototype.push.apply(deeperClasses, block.classes);

    return {classes:block.classes, value:[{classes:block.classes, value:preceding},{classes:deeperClasses, value:value}, {classes:block.classes, value:receding}]};
  }
}

function printResultFromBlocks(blocks){
  var arr = []
  for(var i = 0; i < blocks.length;i++){
    arr.push(printResultFromBlock(blocks[i]));
  }
  return arr;
}

function printResultFromBlock(block){
  if(isString(block)){
    return block;
  }
  if(isArray(block)){
    return printResultFromBlocks(block);
  }
  if(isObject(block)){
    return printResultsFromObject(block);
  }
}

function printResultsFromObject(block){
  if(isArray(block.value)){
    return printResultFromBlocks(block.value);
  }
  if(isObject(block.value)){
    return printResultsFromObject(block);
  }
  if(isString(block.value)){
    return printLowLevelObjects(block);
  }
}

function printLowLevelObjects(object){
    var classes = '';
    var url, caption;

    for(var i = 0; i < object.classes.length; i++){
        classes += ' ' + object.classes[i]; 
    }

    if(classes.indexOf('gif') > -1){
      object.value = object.value.replace('http:','');
      object.value = object.value.replace('gifv','mp4');
      url = object.value.split(';')[0];
      caption = object.value.split(';')[1];
      return <Gif url={url} caption={caption}/>
    }

    if(classes.indexOf('weblink') > -1){
      var target = 0;
      if(object.value.split(';').length > 2){
        target = 1;
      }

      url = object.value.split(';')[0];
      var text = object.value.split(';')[1];

      if(target === 0){
        return <a className="weblink" target="_blank" href={url}>{text}</a>  
      }else{
        return <Link to={url} className="weblink">{text}</Link>
      }
      
    }

    if(classes.indexOf('reference') > -1){
      url = object.value.split(';')[0];
      var referenceNo = object.value.split(';')[1];
      return <sup><a className="weblink" target="_blank" href={url}>({referenceNo})</a></sup>
    }

    if(classes.indexOf('image') > -1){
      url = object.value.split(';')[0];
      caption = object.value.split(';')[1];
      var alt = object.value.split(';')[2];
      return (
              <span>
                <img src={url} alt={alt} className="image"/>
                <span className="caption">{caption}</span>
              </span>
            );
    }

    if(classes.indexOf('list') > -1){
      var listItems = object.value.split(';');
      return listItems.map(function(item,index){
        return <span key={index} className="list">{item}</span>  
      });
    }

    if(classes.indexOf('subscript') > -1){
      object.value = object.value.replace('http:','');
      return <sub>{object.value}</sub>
    }

    if(classes.indexOf('superscript') > -1){
      object.value = object.value.replace('http:','');
      return <sup>{object.value}</sup>
    }

    return <span className={classes}> {object.value} </span>;
}

function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}
    
var blocks = GetBlockMatchesFromBlockArray([paragraph], tags);
var drawn = printResultFromBlocks(blocks)[0];
drawn = isString(drawn) ? [drawn] : flatten(drawn);

    return (
      	<span>
          {drawn.map(function(object, i){
              if(isString(object)){
                return <span key={i}>{object}</span>
              }
              if(isArray(object)){
                return <span key={i}>arr</span>
              }
              if(isObject(object)){
                return <span key={i}>{object}</span>
              }
              return null;
          })}
  		</span>
    );
  }
}
export default RichTextParagraph