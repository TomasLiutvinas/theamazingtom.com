['This is paragraph one {bold}bold text{/bold} some other text {bold}bold text{/bold}']
['This is paragraph two {underline}{bold}bold text{/bold} soem{/underline} other text']

'This is {strike}paragraph one {bold}bold {underline}danke{/underline} memes text{/bold} some other{/strike} text {bold}bold text{/bold}'

'this is '
{type:'strike',value:['paragraph one ', {object}, 'some other'}

{type:'bold',value:['bold ', {object}, 'memes text']}

{type:'underline',value:['danke']}

each paragraphs
	paragraphs[i] = blocks[paragraphs[i]]
	matches[] = match all matches
	each matches
		each blocks[]
			if(object){
				if(object.value matches){

				}
			}else{
				if(block[y] matches){
					

					blocks.push([prior, object, after])	
				}
			}

getMatches(paragraph){
	each(tags){
		matches = getMatches(paragraph, tag)
		blocks = [paragraph]
		updateBlocks(blocks, matches);		
	}
}

updateBlocks(blocks, matches){
	each(blocks){
			each(matches){
				return GetBlockMatchesFromBlock(block, match)
			}
		}
}

GetBlockMatchesFromBlock(block, match){
	if(block == object){
		return GetBlockMatchesFromBlock(object.value)
	}else{
		if(block.matches(value)){
			return createArrayWithObject(block) //returns [prior, object, after]
		}else{
			return [block];
		}
	}
}

createArrayWithObject(block, match){
	prior = split block at match start
	content = split prior at match length
	after = content[2]

	return [prior, parseContent(content), after];
}

parseContent(content){
	return {
		type:parseType(content)
		value:parseValue(content)
	}
}

			
paragraphs = ['This is paragraph one {bold}bold text{/bold} some other text {bold}bold text{/bold}'],...
paragraph[i] = 'This is paragraph one {bold}bold text{/bold} some other text {bold}bold text{/bold}'
blocks[y] = ['This is paragraph one' ,{value:'bold {underline} text{underline/}'}, 'some other text ','{bold}bold text{/bold}']
matches = ['{bold}bold text{/bold}', '{bold}bold text{/bold}']


each paragraph
	from string -> get {tag} text {/tag}
		put tag-> type
		put text-> value
		return object
	each value
		get {tag} text {/tag}
		put tag-> type
		put text-> value
			each value


[{type:'text', value:'This is paragraph one'}, {type='bold', value:'bold text'}, {type:'text', value:'some other text'],
[{type:'text', value:'This is paragraph one'}, {type:'underline',value:[{type:'bold',value:'bold text'},{type:'underline',value:'soem'}]},{type:'text',value:'other text'}]