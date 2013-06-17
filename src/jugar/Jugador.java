package jugar;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/play")
public class Jugador {
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public String DrawArena(){
		return "";
	}
}
