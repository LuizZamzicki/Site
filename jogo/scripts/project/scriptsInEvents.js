
// Import the main script as Main so scripts in
// events can access methods like Main.PlaySfx5().
import * as Main from "./main.js";


const scriptsInEvents = {

	async FolhaJogo_Event4_Act15(runtime, localVars)
	{
		const deslocamentoX = runtime.globalVars.scrollSpeed * runtime.dt;
		
		for (const inimigo of runtime.objects.inimigo_generico.getAllInstances()) {
		    inimigo.x -= deslocamentoX;
		}
		
		for (const inimigo of runtime.objects.jao.getAllInstances()) {
		    inimigo.x -= deslocamentoX;
		}
		
		for (const inimigo of runtime.objects.pastel.getAllInstances()) {
		    inimigo.x -= deslocamentoX;
		}
		
		for (const coca of runtime.objects.coca_obj.getAllInstances()) {
		    coca.x -= deslocamentoX;
		}
		
		
	},

	async FolhaJogo_Event8_Act1(runtime, localVars)
	{
		const animations = ["Emanuel", "Jao_gabriel", "Mauro", "Rafael"];
		const layer = 1;
		const x = 2000;
		const y = 656;
		
		// Criar o inimigo diretamente pelo script
		const inimigo = runtime.objects.inimigo_generico.createInstance(layer, x, y);
		
		if (inimigo) {
		    inimigo.setAnimation(animations[Math.floor(Math.random() * animations.length)]);
		    inimigo.width = -130;
		    inimigo.height = 185;
		}
	},

	async FolhaJogo_Event30_Act2(runtime, localVars)
	{
		Main.playAleatorio();
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
