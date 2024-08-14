# Polygon Folding
Created Donnerstag 25 Juli 2024

The inverse of unfolding a convex polyhedron to a net is folding a polygon to a convex polyhedron:

Given a polygon of *n* vertices, can it fold to some convex polyhedron?

The assumption is that the folded polygon covers the surface of the polyhedron precisely once: there are neither gaps nor double coverage. The polygon doesn't have to be an edge unfolding of the polyhedron, the cuts that produce it are arbitrary.
For the special case of glueing whole edges of the polygon to one another, an *O*(*n³*)-time algorithm is known for a polygon with *n* vertices. Without edge-to-edge restriction, an exponential-time algorithm is known.


