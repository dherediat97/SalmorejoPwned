![CTF Image](/img/hackerlabs/aceituna_brava_1.png)

# Resolución del CTF ~ Aceituna Brava

| Propiedad | Valor |
|---	|---	|
| Máquina        | Aceituna Brava        |
| Entorno        | OVA Linux             |
| Dificultad     | Experto :bomb:        |
| Fecha          | 16/06/2025            |
| Tipo           | Reversing             |
| Autor          | murrusko              |
| Autor Write-up | dherediat             |

#### 1º paso(Instalación y configuración): Una vez tengamos la OVA descargada, descomprimida y funcionando. OJO, muy importante que esté ambos equipos(el host atacante y el host objetivo) en la misma red. El autor de está máquina, nos ha dado una pista bastante importante: la IP de la maquina objetivo.

![First Step](/img/hackerlabs/aceituna_brava_2.png)

#### 2º paso(Enumeración de servicios): Este siempre será uno de los pasos más importantes, porque cada máquina para nosotros es desconocida, no sabemos qué servicios posee.
![Pre Second Step](/img/hackerlabs/aceituna_brava_2_1.png)

> [!TIP]
> Me di cuenta de que las ips estaban estáticas en la web. La web cargará, pero sin estilos. Tenemos que hacer este comando para que pille bien los comandos de enumeración...

![Third 1/4 Step](/img/hackerlabs/aceituna_brava_3_1.png)
![Third 2/4 Step](/img/hackerlabs/aceituna_brava_3_2.png)
![Thid 3/4 Step](/img/hackerlabs/aceituna_brava_3_3.png)
![Third 4/4 Step](/img/hackerlabs/aceituna_brava_3_4.png)

Hasta ahora es igual que muchas máquinas que hay en TheHackerLabs. Pero claro, es un CTF de reversing, por ello debemos pensar en de que manera podemos entrar sin saber el usuario ni la contraseña. Podemos probar que al darle en "Olvidé mi contraseña" y rellenamos el campo de nombre de usuario con un usuario que casi siempre esta en todos los entornos: "admin".Es correcto, nos daremos cuenta de que ese usuario sí existe, podríamos usar hydra y hacer un ataque de fuerza bruta, pero no sería buena idea, ya que tardaría una eternidad. Yo lo llegué a hacer, pero sin resultado.

#### 3º paso(Reconocimiento de servicios): Este paso es sencillamente para investigar lo que podemos hacer con lo poco que tenemos....

Procedemos a explotar esa vulnerabilidad. Creamos un archivo php tonto, que lo que hace es mostrar el phpInfo();.

![Fifth Step](/img/hackerlabs/aceituna_brava_5_1.png)
![Fifth Step](/img/hackerlabs/aceituna_brava_5_2.png)

Nos damos cuenta de que no se puede hacer un shell inverso, ya que esta bloqueado la manera de conectarse, y de hecho cuando aprovechamos esta vulnerabilidad y subimos un archivo escrito en php sobre shell inverso, la propia plataforma de chamilo nos borra el archivo.

Desde mi punto de vista, es más sencillo crear un usuario de test, y ya con ese podemos pivotar con el usuario admin.

![Sixth Step](/img/hackerlabs/aceituna_brava_6_1.png)
![Sixth Step](/img/hackerlabs/aceituna_brava_6_2.png)


![Seventh Step](/img/hackerlabs/aceituna_brava_8.png)


![Eighth Step](/img/hackerlabs/aceituna_brava_9.png)


![Ninth Step](/img/hackerlabs/aceituna_brava_10.png)


![Tenth Step](/img/hackerlabs/aceituna_brava_11.png)

#### 4º Paso(Escalamiento de privilegios): 

![Twelfth Step](/img/hackerlabs/aceituna_brava_12.png)


![Thirdteenth Step](/img/hackerlabs/aceituna_brava_13.png)

¡Y finalmente somos root! Ahora nos toca ver la flag del usuario `root`. 


![Foutteenth Step](/img/hackerlabs/aceituna_brava_14.png)

# ¡Enhorabuena, CTF Completado!