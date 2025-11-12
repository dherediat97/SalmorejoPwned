![CTF Image](/img/hackerlabs/topodns_1.png)

# Resolución del CTF:

| Propiedad | Valor |
|---	|---	|
| Máquina        | El Topo DNS    |
| Entorno        | OVA Linux      |
| Dificultad     | Principiante   |
| Fecha          | 12/11/2025     |
| Tipo           | Forense        |

### Credenciales de Acceso:
- Usuario: auditor
- Contraseña: auditor

### Primer paso, iniciamos sesión con las credenciales que nos han proporcionado:

![Second Step](/img/hackerlabs/topodns_2.png)

> [!TIP]
> Es un CTF orientado a forense, por lo tanto, arrancamos la máquina.

### Luego, nos fijamos en la primera pregunta: ¿Qué dirección IP externa sirvió el _stager_ `p.sh` al servidor web?

### Lo más seguro que este en el log de acceso...

![Thid Step](/img/hackerlabs/topodns_3.png)

### Filtramos con grep el termino 'p.sh' y nos da la IP que es...

### A la pregunta de: ¿Qué fichero PHP (solo nombre) fue el punto de entrada más probable de la explotación inicial?

![Fourth Step](/img/hackerlabs/topodns_4.png)

#### Responderemos: Después de una larga investigación(usando `more`). Nos fijamos en el archivo `upload.php` con un nombre sospechoso, detectamos que ese es el punto de entrada.

> [!TIP]
> Esta es la parte más difícil(desde mi punto de vista), debido al ruido que tiene los logs. Ruido que es un uso cotidiano de la plataforma, es una buena manera de habituarnos a no estresarnos con tanta información.

### Para saber `¿Cuál es el FQDN de la primera consulta de _beaconing_ de C2 observada en los logs?` 

![Fifth Step](/img/hackerlabs/topodns_5.png)

> [!TIP]
> Recomiendo usar mucho el comando `more`, en temas de forense, más aún si como en este caso el host donde están los logs es sin interfaz gráfica. Cada maestro tiene su librillo, solo es mi recomendación personal.

### ¡Siguiente pregunta! ¿Cuál es el dominio (solo el dominio, sin subdominios de datos) usado para exfiltrar el fichero shadow?

![Sixth Step](/img/hackerlabs/topodns_6.png)

> [!TIP]
> Seguimos en el mismo archivo el dns.log, y nos damos cuenta que hay muchos subdominios que usan el mismo dominio(data.thl) en el log.

### Ahora toca.... ¿Qué servicio de red (protocolo) usó el atacante para pivotar al servidor interno 10.0.0.50?

![Seventh Step](/img/hackerlabs/topodns_7.png)

> [!TIP]
> Vemos tres tipos de logs(dns, access y ftp), y si ha hecho una subida de un archivo, es muy posible que use FTP para pivotar.

Y así es. FTP fue el servicio de red/protocolo usado para pivotar al servidor interno 10.0.0.50.

Observamos el fichero de FTP y así es, además nos dará las respuestas a las últimas tres preguntas:
- Qué nombre de usuario se utilizó para autenticarse en el servidor interno? Coloreado en borde rojo.
- ¿Qué contraseña se utilizó para el movimiento lateral exitoso? Con borde verde.
- ¿Cuál es el nombre de fichero exacto que el atacante robó del servidor interno? Con borde amarillo.

# ¡Enhorabuena, CTF Completado!