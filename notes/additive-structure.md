# Run 36 — Additive structure at common binary–ternary hit times

The quadratic pattern `(x,x+d,x+d²)` has a common-level obstruction inside the positive-dimensional diagonal range. For every target, at `τ ≥ log₃ 2` any gap in a synchronized quadratic triple is an integer. At `0<τ<1/7` there is a quantitative positive-dimensional family of noninteger gaps with maximal-dimensional fibers, and a compact set of the full diagonal dimension realizes such a family. The intervening rates remain open in this probe. The linear laws follow from Paper 2 and a grid count. A Behrend thinning also gives compact subsets of full diagonal dimension that avoid 3-APs entirely.

## Setup and literature gate

Write \(N=2^n\), \(M=3^n\), \(a=\log_3 2\), and \(\delta=M^{-\tau}\). Let \(A_n(y;c)\) be the set of \(z\in\mathbb R\) satisfying \(\|Nz-y_1\|,\|Mz-y_2\|<c\delta\). Put \(E_y=\limsup_n A_n(y;1)\). Synchronized means that all indicated points belong to the respective sets at the same \(n\) for infinitely many \(n\). Let \(h=(1-\tau)/(1+\tau)\) for \(0<\tau<1\). Paper 2 gives local dimension \(h\) even for a prescribed infinite subsequence, uniformly positive constant radius factors, and level-dependent shifts. The scalar lower-bound construction supplies separated interior children and uniform interval counts. [Paper 2, binary–ternary theorem, singleton lower bound and two-grid formula](paper/multibase-shrinking-targets.tex#L39) · [LLVZ, §5.5 and Remark 13](https://arxiv.org/html/2208.06112v2#S5.SS5) · [Li–Li–Wu, §4](https://arxiv.org/html/2409.18635v1#S4)

- Łaba–Pramanik require a ball condition and quantitative power Fourier decay to force a 3-AP. Shmerkin constructs 3-AP-free Salem sets of any dimension, including a compact dimension-one example. Yavicoli gives more general avoidance for prescribed linear patterns. In the present setting the Łaba–Pramanik decay hypothesis is unavailable. A smooth periodic majorant of the binary hit window has mean \(O(\delta)\) and uniformly bounded Fourier `ℓ¹` norm. With \(\lvert\widehat\mu(k)\rvert\ll |k|^{-\sigma}\) it gives \(\mu(A_n(y;1))\ll \delta+N^{-\sigma}\), which is summable. [Łaba–Pramanik, Theorem 1.2](https://arxiv.org/pdf/0712.3882) · [Shmerkin, Theorems A–B](https://arxiv.org/pdf/1510.07596) · [Yavicoli](https://arxiv.org/abs/1706.08118)
- Falconer’s large-intersection classes and Durand’s ubiquity theorems explain strong intersections of translated limsups when their hypotheses are verified. An intersection of ordinary limsups allows different time subsequences for different translates. Newhouse-type theorems used by Falconer–Yavicoli require thickness. Sandberg-Clark, Taylor and Yavicoli study the gap set itself, with scale intervals or restrictions under thickness or self-similarity assumptions. Schmeling–Shmerkin already give examples with prescribed dimension growth of iterated sumsets. These results serve as comparison for the synchronized arithmetic and for the compact examples below. [Falconer](https://doi.org/10.1112/jlms/49.2.267) · [Durand](https://doi.org/10.1017/S0305004107000746) · [Falconer–Yavicoli](https://arxiv.org/abs/2102.01186) · [Sandberg-Clark–Taylor–Yavicoli](https://arxiv.org/html/2608.14998v1) · [Schmeling–Shmerkin](https://arxiv.org/abs/0906.1537)
- Fraser–Guo–Pramanik obtain `(x,x+t,x+P(t))` under Fourier decay and a ball condition. Zhu proves a dimension-only result for a set-dependent interval of coefficients in \(P(t)=c t^2+qt\). His fixed \(P(t)=t^2\) statement for all Borel sets of dimension above \(1/2\) is a conjecture. Máthé’s avoidance example has dimension \(1/2\). These questions concern configurations in a set. They impose no common shrinking-target clock. [Fraser–Guo–Pramanik](https://arxiv.org/abs/1904.11123) · [Zhu, Conjecture 1.1 and Theorem 1.2](https://ems.press/content/serial-article-files/52418) · [Máthé](https://arxiv.org/abs/1201.0548)
- The close Diophantine precedents are the fixed-denominator parabola counts of Huang and Huang–Li and the project’s Run 31. Run 31 tests \(d\) at one radix and \(d^2\) at the other. The quadratic claims here test both \(d\) and \(d^2\) in each radix at the same \(n\). The scoped search did not locate the four-condition exclusion proved below. Priority beyond these sources remains unverified. [Huang](https://arxiv.org/abs/1802.00525) · [Huang–Li](https://arxiv.org/abs/1902.06047) · [Run 31](run31-parabola.md)

## Sumsets and synchronized 3-APs

**Category and compact sumsets.** For \(0<\tau<1\), every late tail of the open scalar hits is dense, by the uniform macro-interval count of Paper 2. Baire then gives \(E_y+E_{y'}=E_y-E_{y'}=\mathbb R\) and ordinary finite patterns at every fixed gap. The distance set on the whole line is \([0,\infty\)). These are category consequences. A synchronized compact \(K\subset E_y\) of dimension \(h\), with all points hitting at every chosen stage, has
\[
\dim_{\rm H}(pK-qK)=h\quad(p,q\in\mathbb Z_{\ge0},\ p+q\ge1).
\]
Fixing all but one point supplies a translate or reflection of \(K\). The other bound follows from inclusion in \(\limsup_n A_n((p-q)y;p+q)\) along the stage sequence. In particular the distance set `|K−K|` has dimension \(h\), and none of these compact sumsets contains an interval. This holds even when \(h>1/2\). At \(\tau=0\) the stipulated radius is \(1\) and every test is automatic.

**Common-time sums and differences with a prescribed value.** Put \(z=x\pm x'\). Necessity is \(z\in\limsup_n A_n(y\pm y';2)\). If \(z\in\limsup_n A_n(y\pm y';c)\) with any fixed \(0<c<2\), its \(x\)-fiber has local dimension \(h\). At a level with signed residual \(e_i\) for \(z\), the two conditions on \(b_i^nx-y_i\) give the interval centered at \(e_i/2\) of radius \(\delta-|e_i|/2\). Paper 2 applies on that infinite slack subsequence. Thus the common-time sum and difference parameter sets and the positive distance set all have local dimension \(h\) on their natural domains. The same argument gives a profile for a pinned value at the boundary, using the shrinking interval lengths and shifts in the two-grid formula.

**Exact 3-AP law.** At every sufficiently late level the centered progression \(x-d,x,x+d\) hits \(y\) precisely when
\[
\|b_i^n x-y_i\|<\delta-\|b_i^n d\|\quad (b_1=2, b_2=3).
\tag{1}
\]
Subtracting the signed residual for \(x\) from that for \(x+d\) first gives a step representative of size \(<2\delta\). Once \(4\delta<1/2\), adding or subtracting that representative to the center residual gives the representatives for both outer terms. The maximal absolute value of the two outer residuals is \(|u_i|+|e_i|\).

The local gap dimension is \(h\), and the local joint \((x,d)\)-dimension is \(2h\). Every fixed \(d\in\limsup A_n(0;c)\) with \(0<c<1\) has local center dimension \(h\), by (1) and the subsequence lower bound. For any other \(d\) the exact center dimension is given by Paper 2’s two-grid formula with physical widths \(2(\delta-\|b_i^nd\|)_+/b_i^n\), centers \(y_i/b_i^n+b_i^{-n}\mathbb Z\), and both windows empty at levels failing either positivity test. This also covers exponentially narrow margins. [Paper 2, Two-grid formula](paper/multibase-shrinking-targets.tex#L772)

For the joint upper bound, a scalar hit on a bounded interval has \(O(1+M\delta)\) overlap intervals of length at most \(2\delta/M\). This follows by labeling overlaps by the integer \(Mp-Nq\) of the binary and ternary grid indices. All admissible labels lie in an interval of length \(O(M\delta)\), and a label repeats with parameter period one. Apply this count in each factor in (1) and sum the square-cover costs. For the lower bound run the Paper 2 inner Cantor construction independently for \(x\) at \(y\) and \(d\) at \(0\), with radii \(\delta/4\) and one shared sequence of stages. Each new level may be arbitrarily large, so one choice serves the finitely many parents in both factors. Use Frostman exponents \(s_j\uparrow h\) for successive stages, choosing each level large enough for the first \(j\) exponents and the child mass bound at \(s_j\). For any fixed exponent in the sequence the finitely many earlier stages change only the Frostman constant. The product measure proves the lower bound \(2h\). If the resulting compacts are \(C,D\), the compact set \(C\cup(C-D)\cup(C+D)\subset E_y\) has dimension \(h\) and realizes all the APs in \(C\times D\) at every selected stage. The starting intervals can keep \(d>0\) and the three points inside any prescribed open interval. Integer-gap copies and the zero-target scaling identity supply no novelty here.

## A full-dimensional 3-AP-free compact inside each positive-dimensional target

The compact counterexample can be constructed in the radix grids themselves. Start in an interval of length \(<1\). At a scalar Cantor stage \(n\) every child has binary and ternary indices \(p,q\) at the same target and a label \(k=Mp-Nq\). Choose at most one child interval per pair as in Paper 2. Distinct children of a parent have distinct \(k\), since equal labels force the centers to differ by an integer. Across the whole level the candidate \(k\)'s lie in an interval of length \(O(M\delta)\) whose center may depend on \(n,y\).

For each parent choose the richest cyclic translate of a Behrend set modulo an integer \(m\asymp M\delta\) larger than that interval’s length. Place the original progression-free set in the first quarter of the residues before translating. The equation \(k_1+k_3=2k_2\pmod m\) on those unshifted residues is an integer equation, so all residues are equal. Averaging translates retains a fraction at least \(\exp(-C\sqrt n)\) of the parent’s original children. For an exact AP among three limit points, take the first stage at which they belong to more than one child of one parent. Each grid carries the same AP among its indices because the target cancels and the integer error is \(<4\delta<1\). Thus their labels form a cyclic AP, forcing all three children to coincide. [Behrend’s original bound](https://pmc.ncbi.nlm.nih.gov/articles/PMC1078964/)

The subexponential thinning keeps the full exponent. Write \(u=(1+\tau)\log 3\), \(v=(1-\tau)\log 3\), and set \(n_j=\lceil n_{j-1}^{3/2}\rceil\). A parent of length \(R\asymp e^{-u n_{j-1}}\) retains \(\gg R e^{vn_j-C\sqrt{n_j}}\) children, each of length \(\asymp e^{-un_j}\). Distribute its mass equally. Even with parent mass bounded by one, each child mass is \(\le e^{-v n_j+o(n_j)}\). Given \(0<s<t<h\), all sufficiently late parent masses \(P\) therefore satisfy \(P\ll R^t\).

If a test interval of length \(\ell\in[r_{n_j},R]\), where \(r_{n_j}\asymp e^{-un_j}\) is the actual child length, is at the macroscopic count scale \(\ell\ge e^{-bn_j}\), its mass from a parent is at most \(C P\min(1,e^{C\sqrt{n_j}}\ell/R)\). This is \(O(\ell^s)\), since \(\sqrt{n_j}=o(n_{j-1})\) and \(e^{Cs\sqrt{n_j}} R^{t-s}\) stays bounded. Below that scale the unthinned count for \(t<h\) in Paper 2 is \(O(e^{vn_j}\ell^t)\). The thinned mass estimate is \(O(R^{-1}e^{C\sqrt{n_j}}\ell^t)=O(\ell^s)\), since \(n_{j-1}=o(n_j)\) and \(\ell<e^{-bn_j}\). One applies these estimates at the stage with child length comparable to or smaller than the test length and parent length larger than it. Separation makes the number of intersected parents bounded. This supplies a Frostman bound at every \(s<h\) for the same measure. The construction uses all sufficiently large levels as available levels, which permits the specified growth of \(n_j\). [Paper 2, singleton lower-bound counts](paper/multibase-shrinking-targets.tex#L517)

## Exact critical obstruction for 3-APs

At \(\tau=1\), write \(p,q\) for the nearest integers to \(Nd,Md\) at a synchronized hit. By (1), \(|Mp-Nq|<1+N/M\), so the only remainders at late levels are \(0,\pm1\). If the remainder is nonzero, the triangle inequality gives
\[
\|Nd\|>\frac1M-\frac{N}{M^2},\qquad
\|Nx-y_1\|<\frac{N}{M^2}.
\]
The ternary center still satisfies \(\|Mx-y_2\|<1/M\). Multiplying the two center bounds by \(M,N\) respectively and subtracting proves the necessary condition
\[
\|M y_1-N y_2\|<2N/M .
\tag{2}
\]
If (2) fails at every sufficiently late level, only remainder zero is possible, and coprimality then puts \(d\) within \(M^{-2}\) of an integer. This rules out every fixed noninteger gap at the exact critical radius for the explicit target \(y=(0,1/3)\), since the phase norm is always \(1/3\). Each scalar level for this target still has a positive-width overlap somewhere modulo one. The homogeneous critical symmetric scalar limsup has the additional CRT remainders \(\pm1\), and their noninteger occupancy is unresolved here.

**Almost-everywhere critical occupancy.** For each fixed \(y_2\), almost every \(y_1\) gives a dense \(G_\delta\) scalar limsup at \(\tau=1\) and excludes every fixed noninteger synchronized AP gap. Fix a nonempty interval \(J\subset(0,1)\), and take the \(\asymp |J|M\) consecutive \(q\) for which \(x=(q+y_2)/M\) lies in \(J\). These points have ternary error zero. Their images \(Nx\bmod1\) are distinct on a translated grid of mesh \(1/M\). They equidistribute as \(n\to\infty\), since for each fixed nonzero integer frequency the geometric sum is \(O(M/N)\). Thus for any fixed open interval \(V\) of first targets, eventually \(\gg |J||V|M\) images lie in the middle of \(V\). The radius \(1/(4M)\) intervals around them are disjoint and lie in \(V\), and every first target in one of these intervals has a level hit in \(J\). The tail unions therefore have measure at least \(c_J |V|\) in every \(V\), with the same \(c_J>0\). The decreasing-tail limit has the same property. Lebesgue density makes it full measure. Intersect over a countable basis of \(J\)'s and apply Baire to the open scalar tail unions. Finally, the exceptional phase condition (2) has first-target measure at most \(4N/M\) at late levels, which is summable. This supplies a critical regime with dense sections and the synchronized exclusion simultaneously. The explicit rational example above supplies the exclusion without settling that target's scalar limsup.

For \(\tau>1\), even the homogeneous gap condition at a constant multiple of the radius forces remainder zero eventually, so synchronized AP gaps are integral. The scalar target \(y=(0,1/3)\) is empty at these rates, since center compatibility requires \(\|My_1-Ny_2\|<(M+N)\delta\to0\). For each fixed second target, this last compatibility inequality has summable first-target measure, so almost every section is empty. The homogeneous scalar limsup is exactly \(\mathbb Z\). A synchronized sum, difference, or triple parameter set always has dimension zero at \(\tau\ge1\) by the \(O(1)\) per-level count on bounded sets. Ordinary sumsets depend on target occupancy. Paper 2 gives dense residual sections for residual targets, for which the category sumset conclusion still applies. [Paper 2, target category and scalar endpoint](paper/multibase-shrinking-targets.tex#L1223)

## Quadratic synchronization

### Integer gaps for `τ ≥ log₃ 2`

**Uniform finite-level statement.** Fix a bounded interval for \(d\) and any constant \(C>0\). For all sufficiently large \(n\), if
\[
\|Nd\|,\|Md\|,\|Nd^2\|,\|Md^2\| \le C/N ,
\tag{3}
\]
then the nearest integer to \(Nd\) is divisible by \(N\) and the nearest integer to \(Md\) is divisible by \(M\). For radii bounded by \(C\delta\) with \(\delta\le 1/N\), this puts \(d\) within \(C\delta/M\) of an integer. Subtracting the three point residuals for \(x,x+d,x+d^2\) gives all four bounds in (3) with \(C=2\) when \(\tau\ge a\). Hence any synchronized gap must be integral. Every compact \(K\subset(0,1)\) constructed with a shared sequence of hits at such a rate consequently avoids the real quadratic triple with three distinct points.

**Proof.** Let \(p,q,r,s\) be nearest to \(Nd,Md,Nd^2,Md^2\), respectively. Put
\[
A=p^2-Nr,\qquad B=q^2-Ms,\qquad U=Mp-Nq.
\]
On the bounded \(d\)-interval, \(A=O(1)\), \(B=O(M/N)\), and \(U=O(M/N)\). In the strict range \(\tau>a\) the stronger bounds \(A=O(N\delta)=o(1)\), \(B,U=O(M\delta)\) apply.

If \(A\ne0\) at infinitely many arbitrarily late levels, pass to a fixed such integer \(A\). The congruence \(U^2\equiv A M^2\pmod N\) puts \(U/M\) exponentially close to a square root of \(A\) in \(\mathbb Q_2\). In detail, compactness in \(\mathbb Z_2\) gives a fixed root \(\xi\ne0\) on a subsequence. Factoring the difference of squares then gives \(|U-\xi M|_2\ll_A N^{-1}\), because the other factor has a fixed nonzero \(2\)-adic absolute value for all sufficiently late elements of the subsequence. On \((U,M)\) apply the \(S\)-adic Subspace Theorem with forms \(X,Y\) at infinity and at \(3\), and \(X-\xi Y,Y\) at \(2\). The product is \(\ll |U|/N=O((3/4)^n)\). If using primitive vectors, the gcd divides \(M\) and its \(S\)-unit factors cancel out of the product. The height is at most \(O(M)\). A persistent rational line then forces \(U/M\) to be constant, while \(U/M\to0\). This gives \(U=0\), impossible at large levels with fixed \(A\ne0\).

It remains to treat \(A=0\). Set \(m=\lfloor n/2\rfloor\), \(L=2^m\). From \(N\mid p^2\) one gets \(p'=Lp/N\in\mathbb Z\). Put \(V=Mp'-Lq=(L/N)U\). Then
\[
V^2\equiv L^2 B\pmod M,\qquad |V|\ll M/N^{3/2},\qquad |L^2 B|\ll M .
\]
Thus \(T=(V^2-L^2 B)/M\) is a bounded integer. In the strict range \(V^2+|L^2B|=o(M)\) already gives \(T=0\). At the bounded-width endpoint, suppose \(T\ne0\) infinitely often and pass to fixed \(T\) and parity \(\epsilon=n-2m\). The congruence \(V^2\equiv T3^\epsilon(3^m)^2\pmod{L^2}\) gives a fixed algebraic \(2\)-adic square root \(\xi\ne0\) of \(T3^\epsilon\), with \(|V-\xi 3^m|_2\ll_T L^{-2}\). Apply the same two-variable forms to \((V,3^m)\). Their product is \(\ll |V|/L^2\ll M/N^{5/2}\), exponentially small, and \(V/3^m\to0\). This forces \(V=0\) on a subsequence, contradicting the fixed nonzero \(T\) congruence for growing \(L^2\).

We conclude \(V^2=L^2B\) eventually. Therefore \(L\mid V\), \(L\mid p'\) by coprimality, and \(N\mid p\). For \(j=p/N\in\mathbb Z\), \(|q-Mj|\le C/N+CM/N^2=o(1)\), so \(q=Mj\). The contradiction-sequence arguments allow \(d\) to vary over the fixed bounded interval, establishing uniform eventual exclusion. [Schlickewei, Compositio Mathematica 82 (1992), 245–273](https://www.numdam.org/item/CM_1992__82_3_245_0/)

### Positive-dimensional gaps for `0<τ<1/7`

Let \(G\) be the four-condition limsup of (3) with strict widths \(\delta/4\) in place of \(C/N\). For this range it has local dimension at least
\[
\frac{g}{1+\tau},\qquad
g=\min\left\{\frac{1-7\tau}{2},\frac{a-3\tau}{2},1-2\tau,a\right\}>0.
\tag{4}
\]
The lower bound holds in every open interval, with the covering estimates uniform over test intervals in a fixed bounded range. Every \(d\in G\) has a local \(h\)-dimensional center fiber for the synchronized nonlinear pattern at every target \(y\), by taking inner \(x\)-hits of radius \(\delta/4\) at the levels witnessing \(d\in G\). The local joint dimension is at least \(h+g/(1+\tau)\) by the compact product construction below, and at most \(2h\) by counting the scalar center and linear gap conditions.

For (4), take a nonnegative smooth periodic bump \(f\) supported on \(\|w\|<\delta/8\) by rescaling and periodizing one fixed test function. Its Fourier coefficients satisfy
\[
\widehat f(0)\asymp\delta,\quad
\sum_k|\widehat f(k)|\ll1,\quad
\sum_{k\ne0}|\widehat f(k)|\,|k|^{-1/2}\ll\delta^{1/2},\quad
\sum_{k\ne0}|\widehat f(k)|\,|k|^{-1}\ll\delta\log(1/\delta).
\]
Integrate \(f(Nd)f(Md)f(Nd^2)f(Md^2)\) over an interval \(J\) in a fixed bounded range. The zero Fourier mode contributes \(\asymp |J|\delta^4\). Truncate all indices at \(M^\eta\), where \(\tau<\eta<1-a\). The remaining coefficient tails are \(O(M^{-A_0})\) for any fixed \(A_0\) by smoothness. With indices \((u,v,w,z)\) the phase is \((Nu+Mv)d+(Nw+Mz)d^2\). If \(z\ne0\), the second derivative has magnitude \(\gg M|z|\), since \(NM^\eta=o(M)\). If \(z=0,v\ne0\), the first derivative has magnitude \(\gg M|v|\) throughout the fixed interval and is monotone. If \(z=v=0,w\ne0\), use second derivative \(2Nw\). If only \(u\ne0\), integrate the linear phase. The resulting errors, in that order, are
\[
O\bigl(M^{-1/2}\delta^{1/2}\bigr),\quad
O\bigl(M^{-1}\delta^2\log(1/\delta)\bigr),\quad
O\bigl(N^{-1/2}\delta^{5/2}\bigr),\quad
O\bigl(N^{-1}\delta^4\log(1/\delta)\bigr).
\]
After division by \(\delta^4\) the exponent governing all errors is at least \(g\), allowing the displayed logarithmic factors. For every \(0<b<g\), every interval of length \(M^{-b}\) therefore contains an inner hit for all sufficiently late levels. At each inner hit there is a ball of radius \(c_I\delta/M\) contained in the wider level set defining \(G\), by the derivative bounds on the compact test range. Take one inner hit per interval of an \(M^{-b}\) partition. For every \(s<b/(1+\tau)\), the balls with radii raised to \(s\) cover every interior point of the test interval at all late levels. Apply mass transference and take \(b\uparrow g\). [Beresnevich–Velani, Theorem 2](https://annals.math.princeton.edu/2006/164-3/p06)

The covering proof can use a compact \(D\) whose points all satisfy the four gap tests at every selected stage. Retain every third cell of a regular \(M^{-b}\) partition inside the middle of each parent, place one inner hit per retained cell, and keep its closed ball of radius \(c_I\delta/M\). The gaps between centers are \(\gg M^{-b}\). The number of children in length \(\ell\) is \(O(1+\ell M^b)\), and each parent of length \(R\) has \(\gg R M^b\) children. To get a Frostman bound at \(s<b/(1+\tau)\), divide mass \(P\) equally among the children. At \(\ell\ge M^{-b}\) the parent contributes \(O(P\ell/R)=O(\ell^s)\) once \(P\ll R^s\). Between the child length and \(M^{-b}\) the test interval meets \(O(1)\) children of mass \(O(P/(R M^b))\) each. Take the new level large enough for this to be at most the child length to the power \(s\), which also propagates the parent mass bound. The stages can simultaneously serve Paper 2’s inner construction of a compact \(C\) of dimension \(h\) for \(x\) at target \(y\). Choose \(D\subset(0,1/2)\) and both starting intervals so all pattern points fit in the desired ambient interval. Then \(C\cup(C+D)\cup(C+D^2)\subset E_y\) is compact, has dimension \(h\), and realizes the entire nonlinear family \(C\times D\) at the common stages.

For a fixed \(d\), an exact companion profile can also be read from Paper 2. At late levels take signed representatives \(e_i,f_i\) for \(b_i^n d,b_i^n d^2\). The center window is empty if the diameter of \(S_i=\{0,e_i,f_i\}\) is at least \(2\delta\). Otherwise its fractional width is \(2\delta-(\max S_i-\min S_i)\), centered at \(y_i-(\max S_i+\min S_i)/2\). The diameter condition implies \(|e_i|,|f_i|<2\delta\), and \(\delta\to0\) ensures the interval representatives used here apply. The resulting two-window formula addresses a pinned fiber once its gap rates are known.

## Gate recommendation

Keep the synchronized quadratic result for targeted independent review. The fast theorem is an eventual arithmetic exclusion above a rate strictly inside the positive-dimensional diagonal range. At the other end the Fourier count supplies a positive-dimensional family with quantitative common-level coverage. A sharper transition or a broader nonlinear arithmetic mechanism would make this a stronger candidate for a separate paper. The linear dimension laws, critical example, and compact avoidance give secondary results. The raw Baire and homogeneous scaling claims are closed.
