const $=id=>document.getElementById(id);
function openAI(){location.hash='ai'}
function route(){const active=location.hash==='#ai',details=location.hash==='#details';$('welcome').hidden=active||details;$('ai').hidden=!active;$('details').hidden=!details;if(active)$('prompt').focus({preventScroll:true});else $('swipe').value=0;window.scrollTo(0,0)}
$('swipe').addEventListener('input',e=>{if(Number(e.target.value)>=90)openAI()});
$('swipe').addEventListener('change',e=>{if(Number(e.target.value)<90)e.target.value=0});
$('open-ai').addEventListener('click',openAI);$('back').addEventListener('click',()=>{location.hash=''});window.addEventListener('hashchange',route);route();
$('example').addEventListener('click',()=>{$('prompt').value='Celcius, 500 samples for Chi Omega, Homecoming Weekend';$('prompt').focus()});
$('campaign-form').addEventListener('submit',e=>{e.preventDefault();if(!$('prompt').value.trim()){$('prompt').focus();$('prompt').setCustomValidity('Describe your campaign first.');$('prompt').reportValidity();return}resetApproval();location.hash='details'});$('prompt').addEventListener('input',()=>$('prompt').setCustomValidity(''));
if('serviceWorker' in navigator)navigator.serviceWorker.register('/sw.js').catch(()=>{});
if(document.modelContext?.registerTool){try{document.modelContext.registerTool({name:'stage_campaign_prompt',description:'Open Iconx AI and fill the campaign prompt without creating a campaign.',inputSchema:{type:'object',properties:{prompt:{type:'string',minLength:1}},required:['prompt'],additionalProperties:false},annotations:{readOnlyHint:false},execute(input){if(typeof input?.prompt!=='string'||!input.prompt.trim())throw new Error('A non-empty campaign prompt is required.');openAI();$('prompt').value=input.prompt;return{status:'staged',prompt:input.prompt}}})}catch{}}

function resetApproval(){$('approve').value=0;$('approve').disabled=false;$('approve-label').textContent='Slide to Approve and Fund';$('approval-result').hidden=true;}
$('edit-campaign').addEventListener('click',openAI);
$('approve').addEventListener('input',e=>{if(Number(e.target.value)>=95){e.target.value=100;e.target.disabled=true;$('approve-label').textContent='Opening GFT Rewards…';window.location.assign('https://admin.gftrewards.com/');}});
$('approve').addEventListener('change',e=>{if(Number(e.target.value)<95)e.target.value=0;});
$('retargeting').addEventListener('change',resetApproval);
$('reset-approval').addEventListener('click',resetApproval);
