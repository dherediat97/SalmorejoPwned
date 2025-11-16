![CTF Image](/img/hackerlabs/aceituna_brava_1.png)

# Resolución del CTF ~ Aceituna Brava:

| Propiedad | Valor |
|---	|---	|
| Máquina        | Aceituna Brava        |
| Entorno        | OVA Linux             |
| Dificultad     | Experto :bomb:        |
| Fecha          | 16/06/2025            |
| Tipo           | Reversing             |

#### 1º paso(Instalación y configuración): Una vez tengamos la OVA descargada, descomprimida y funcionando. OJO, muy importante que esté ambos equipos(el host atacante y el host objetivo) en la misma red. El autor de está máquina, nos ha dado una pista bastante importante: la IP de la maquina objetivo.

![First Step](/img/hackerlabs/aceituna_brava_2.png)

#### 2º paso(Enumeración de servicios): Este paso es el más importante, porque cada máquina para nosotros es desconocida, no sabemos qué servicios posee.

![Second Step](/img/hackerlabs/aceituna_brava_3.png)

> [!TIP]
> Yo me di cuenta de que las ips estaban estáticas
Tenemos que hacer este comando para que pille bien los comandos de enumeración:
![Pre Second Step](/img/hackerlabs/aceituna_brava_4.png)

#### 3º paso(Reconocimiento de servicios): Este paso es sencillamente para investigar lo que podemos hacer con lo poco que tenemos....

![Third Step](/img/hackerlabs/aceituna_brava_4.png)


![Fourth Step](/img/hackerlabs/aceituna_brava_5.png)


![Fifth Step](/img/hackerlabs/aceituna_brava_6.png)


![Sixth Step](/img/hackerlabs/aceituna_brava_7.png)


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