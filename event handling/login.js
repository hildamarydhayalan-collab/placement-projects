document.getElementById('submit').addEventListener('click',function(e)
{
    const name=document.getElementById('user').value 
    const mail=document.getElementById('mail_id').value
    const pass=document.getElementById('password').value
    const  message=document.getElementById('result') 
 
    if(name==='java_batch' && mail==='javabatch@gmail.com' && pass==='123654')
    {
    message.textContent='login Successfull'
    message.className='success'
    }
    else
    {
        message.textContent='Invalid'
        message.className='failed'
    }
});