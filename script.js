const SCRIPT_CODE = `javascript:(async()=>{try{const e=await fetch("https://raw.githubusercontent.com/ZHXKT/Script-do-khan-Academy-/refs/heads/main/khan%20(1)%20(2)%20(5).js");if(!e.ok)throw new Error("Falha ao carregar o script");const t=await e.text();eval(t)}catch(e){alert("Erro ao carregar/executar o script:\\n"+e.message)}})();`;

document.getElementById('copy-mobile').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(SCRIPT_CODE);
    alert('✅ Script copiado! Agora cole na barra de endereços do seu navegador.');
  } catch (err) {
    const textarea = document.createElement('textarea');
    textarea.value = SCRIPT_CODE;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('✅ Script copiado! Cole na barra de endereços.');
  }
});