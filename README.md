# React Grid Component

Implementing Grid Component behavior:

* 12 rows (like in bootstrap etc.)
* responsive props for different screen sizes (xs, sm, md, lg)
* justify-content and align-items
* GridRuler - helper component for visualization

Example: 
```
<Grid 
  container
  gap="sm"
  justifyContent="center"
  alignItems="center"
 >
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <div>Content Box 1</div>
  </Grid>

  <Grid item xs={12} sm={6} md={4} lg={3}>
    <div>Content Box 2</div>
  </Grid>
</Grid>
```
